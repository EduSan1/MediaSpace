import { TeamORM } from "../entity/team";
import { TeamRepository } from "../repository/Team";
import { UserRepository } from "../repository/User";
import { UserTeamRepository } from "../repository/UserTeam";

export class TeamService {
  private _: TeamRepository;
  private userTeamRepository: UserTeamRepository;
  private userRepository: UserRepository;

  constructor(repo: TeamRepository) {
    (this._ = repo),
      (this.userTeamRepository = new UserTeamRepository()),
      (this.userRepository = new UserRepository());
  }

  createFreelancer = async (obj: any) => {
    try {

      const user = await this.userRepository.findById(obj.userId);

      const hasFreelancerProfile =  user.teams.find((team: any) => team.is_freelancer === true) ? true : false

      if(hasFreelancerProfile) {
            return {
                message: "O usuário ja possui um perfil de freelancer",
                statusCode: 200
              };
      }

      const team = {
        name: `${user.first_name} ${user.last_name}`,
        nickname: user.nickname,
        description: user.description,
        profile_picture: user.profile_picture,
        general_evaluation: 0,
        status: true,
        is_personal: true,
        categories: obj.categories,
        sub_categories: obj.sub_categories,
      };

      const teamEntity = await this._.create(team);

      const userTeam = {
        user: {
          id: user.id,
        },
        team: {
          id: teamEntity.id,
        },
        is_active: true,
        is_admin: true,
        is_freelancer: true,
      };

      const userTeamEntity = await this.userTeamRepository.create(userTeam);

      //teste listagem relacionamento
    //   const userTeamEntity2 = await this.userTeamRepository.findById(
    //     userTeamEntity.id
    //   );

    //   userTeamEntity2.user.teams = undefined;
    //   userTeamEntity2.team.users = undefined;

      return team;

      //   return {
      //     data: team,
      //     message: "Time criado com sucesso",
      //     statusCode: 200,
      //   };
    } catch (error) {
      return {
        message: error.message,
        error: error.code,
        statusCode: 400,
      };
    }
  };

  getById = async (id: string) => {
    try {
      const entityExists = await this._.findById(id);
      if (entityExists) {
        entityExists.categories.map((category: any) => {
          category.subCategory = undefined;
        });

        return {
          data: entityExists,
          message: "Time encontrado com sucesso",
          statusCode: 200,
        };
      } else {
        return {
          data: entityExists,
          message: "Não foi possivel encontrar o time",
          statusCode: 200,
        };
      }
    } catch (error) {
      return {
        message: error.message,
        error: error.code,
        statusCode: 400,
      };
    }
  };

  list = async () => {
    try {
      const entities = await this._.list();

      entities.map((team: any) => {
        team.categories.map((category: any) => {
          category.subCategory = undefined;
        });
      });

      return entities;
    } catch (error) {
      return {
        message: error.message,
        error: error.code,
        statusCode: 400,
      };
    }
  };

  update = async (id: string, entity: TeamORM) => {
    try {
      const entityExists = await this._.findById(id);

      if (!entityExists) {
        return {
          message: "Não foi possivel encontrar o time",
          statusCode: 200,
        };
      }

      for (const [key, value] of Object.entries(entity)) {
        entityExists[key] = value;
      }

      await this._.update(entityExists);

      return {
        message: "Dados atualizados com sucesso",
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: error.message,
        error: error.code,
        statusCode: 400,
      };
    }
  };

  disable = async (id: string) => {
    try {
      const entityExists = await this._.findById(id);

      if (!entityExists)
        return {
          message: "Não foi possivel encontrar o time",
          statusCode: 200,
        };

      if (entityExists.is_active === false)
        return {
          message: "O time já está desativado",
          statusCode: 200,
        };

      entityExists.is_active = false;

      await this._.update(entityExists);

      return {
        message: "Time desativado com sucesso",
        statusCode: 200,
      };
    } catch (error) {
      return {
        message: error.message,
        error: error.code,
        statusCode: 400,
      };
    }
  };
}
