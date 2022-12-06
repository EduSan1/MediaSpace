import React, { useEffect } from 'react';
import TitleIndex from '../../components/utils/TitleMain/Index';
import InputBtn from '../../components/utils/Button/InputBtn';
import ImageComponent from '../../components/utils/imageComponent/imageComponent';
import { Link, useParams } from 'react-router-dom';

const ProviderUserRegister = () => {

    const { userId } = useParams()

    return (

        <main id="ConatinerALL_ProviderRegister">

            <TitleIndex classNameText='Tittle_main_ProviderUser' idConatinerDiv='Container_tittle' title='Deseja cadastrar-se como prestador?' />

            <div className="Container_Providor_user">

                <ImageComponent alt='' src='https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FfreelancerBaseProfile.png?alt=media&token=61fb92c6-82c5-4245-a621-91470ba196b8' className='img_Astronaut' />
                <div className="container_texte_previdor">
                    <h3>Perfil de prestador de serviço </h3>
                    <span>
                        <li> Publicação de portfólio </li>
                        <li> Inscrição em projetos</li>
                        <li> Venda de produtos</li>
                        <li> Formação de equipes</li>
                    </span>

                </div>
            </div>

            <div className="Conatiner_bnt_User_Provider">

                <Link to={`/register/registerFreelancer/${userId}`}>
                    <InputBtn typeInput={'submit'} name={'btnLogin'} className={'InputBtnProviderUser'} valueBtn={'Continuar como prestador'}
                        onClick={() => {}} />
                </Link>


                <Link to='/register/registered'>
                    <InputBtn typeInput={'submit'} name={'btnLogin'} className={'InputBtnProviderUser'} valueBtn={'Continuar como cliente'}
                        onClick={() => {}} />
                </Link>
            </div>


        </main>

    );

}

export default ProviderUserRegister;