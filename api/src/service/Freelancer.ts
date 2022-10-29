import { TeamORM } from "../entity/team";
import { FreelancerRepository } from "../repository/Freelancer";
import { UserRepository } from "../repository/User";
import { UserTeamRepository } from "../repository/UserTeam";

interface ICreateFreelancer {
  userId: string;
  categories: {
    id: string;
  };
  sub_categories: {
    id: string;
  };
}

export class TeamService {
  private _: FreelancerRepository;
  private userTeamRepository: UserTeamRepository;
  private userRepository: any;

  constructor(repo: FreelancerRepository) {
    (this._ = repo),
      (this.userTeamRepository = new UserTeamRepository()),
      (this.userRepository = new UserRepository());
  }

  create = async (obj: ICreateFreelancer) => {
    try {
      const user = await this.userRepository.findById(obj.userId);

      const hasFreelancerProfile = user.teams.find((team: TeamORM) => team.is_freelancer === true) ? true : false;

      if (hasFreelancerProfile) {
        return {
          message: "O usuário ja possui um perfil de freelancer",
          statusCode: 200,
        };
      }

      const freelancerData = {
        id: user.id,
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

      const freelancer = await this._.create(freelancerData);

      const userTeam = {
        id: user.id,
        user: {
          id: user.id,
        },
        team: {
          id: freelancer.id,
        },
        is_active: true,
        is_admin: true,
        is_freelancer: true,
      };

      await this.userTeamRepository.create(userTeam);

      return {
        data: freelancer,
        message: "Prestador cadastrado com sucesso",
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

  getById = async (id: string) => {
    try {
      const entityExists = await this.userRepository.findById(id);
      if (entityExists) {

        return {
          data: entityExists,
          message: "Prestador encontrado com sucesso",
          statusCode: 200,
        };
      } else {
        return {
          data: entityExists,
          message: "Não foi possivel encontrar o prestador",
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

  list = async (query: any) => {
    try {
      let response = null
      if (query.take !== undefined) {
        let user = null
        if (query.categories) {
          const categories = query.categories.split(",")
          user = await this._.listPageCategories(query.take, (query.page - 1) * query.take, query.search || "", categories);
        } else {
          user = await this._.list();

        }

        response = {
          page: query.page,
          numberOfPages: Math.ceil((user[user.length - 1] / query.take)),
          count: user[user.length - 1],
          data: user
        }

      } else {
        response = await this.userRepository.listWhere("teams", "");

      }


      return {
        data: response,
        message: "Prestadores encontrados com sucesso",
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

  update = async (id: string, entity: TeamORM) => {
    try {
      const entityExists = await this._.findById(id);

      if (!entityExists) {
        return {
          message: "Não foi possivel encontrar o freelancer",
          statusCode: 200,
        };
      }
      if (entity.categories) {
        entityExists.categories = [];
      }

      if (entity.sub_categories) {
        entityExists.sub_categories = [];
      }

      await this._.update(entityExists);

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
          message: "Não foi possivel encontrar o freelancer",
          statusCode: 200,
        };

      if (entityExists.is_active === false)
        return {
          message: "O freelancer já está desativado",
          statusCode: 200,
        };

      entityExists.is_active = false;

      await this._.update(entityExists);

      return {
        message: "freelancer desativado com sucesso",
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
