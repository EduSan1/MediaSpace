import React from 'react';
import TitleIndex from '../../components/utils/TitleMain/Index';
import InputBtn from '../../components/utils/Button/InputBtn';
import ImageComponent from '../../components/utils/imageComponent/imageComponent';
import { Link } from 'react-router-dom';

const ProviderUserRegister = () => {

    return (

        <main id="ConatinerALL_ProviderRegister">

            <TitleIndex classNameText='Tittle_main_ProviderUser' idConatinerDiv='Container_tittle' title='Deseja cadastrar-se como prestador?' />

            <div className="Container_Providor_user">

                <ImageComponent alt='' src='../assets/img/astronaut.svg' className='img_Astronaut' />
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

                <Link to="">
                    <InputBtn typeInput={'submit'} name={'btnLogin'} className={'InputBtnProviderUser'} valueBtn={'Continuar como prestador'}
                        onClick={() => {
                            console.log('next page')
                        }} />
                </Link>
                

                <Link to='/register/registered'>
                    <InputBtn typeInput={'submit'} name={'btnLogin'} className={'InputBtnProviderUser'} valueBtn={'Continuar como cliente'}
                        onClick={() => {
                            console.log('next page')
                        }} />
                </Link>
            </div>


        </main>

    );

}

export default ProviderUserRegister;