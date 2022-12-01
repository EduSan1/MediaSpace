import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/Login';
import RegisterPage from './pages/Register';
import ProviderUserRegisterPage from './pages/ProviderUserRegister';
import RegisteredPage from './pages/SucessRegister/SucessRegister';
import RecoveryPasswordPage from './pages/Recoverypassword';
import SendingEmailRecoveryPage from './pages/SendingEmailRecovery';
import MailConfirmedPage from './pages/ConfirmEmailWarningPage';
import RecoveringPasswordPage from './pages/RecoveringPasswordPage';
import ChangePasswordPage from './pages/RecoveringPasswordPage';
import SpaceBackground from './components/SpaceBackground';
import PasswordWarningPage from './pages/PasswordWarningPage';
import RegisterFreelancer from './pages/RegisterFreelancer';
import HomePage from './pages/Home';
import CreateProject from './pages/CreateProject';
import Projects from './pages/Projects';
import Eventes from './pages/Eventes';
import Menssagens from './pages/Menssage';
import PerfilFreelancer from './pages/Perfil/Freelancer';
import PerfilCliente from './pages/Perfil/Cliente';
import UpdateEdit from './pages/Perfil/UpdateEdit';
import ProjectsrequirementsFreelancer from './pages/ProjectRequirementsFreelancer';
import AllFreelancerView from './pages/ProjectsViewallfrelancer';
import ProjectsvisualizationFreelancersAll from './pages/ProjectRequirementsClient';
import ProjectsSelecetFreelancer from './pages/ProjectSelectfreelancer';
import ProjectRequirements from './pages/ProjectRequirements';

import Teste from './pages/teste';
//import SpaceBackground from './components/SpaceBackground';
import PreviewProject from './pages/PreviewProject';
import PreviewProjectCreator from './pages/PreviewProject/Creator';
import Profile from './pages/Perfil';


function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/register/provideruserregister/:userId' element={<ProviderUserRegisterPage />} />
        <Route path='/confirmRegister' element={<MailConfirmedPage />} />
        <Route path='/register/registerFreelancer/:userId' element={<SpaceBackground component={<RegisterFreelancer />} />} />
        {/* <Route path='/register/registerFreelancer' element={<SpaceBackground component={<RegisterFreelancer />} />} />  */}
        <Route path='/register/registered' element={<RegisteredPage />} />
        <Route path='/recoverpassword' element={<RecoveryPasswordPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/changePassword' element={<SpaceBackground component={<RecoveringPasswordPage />} />} />
        <Route path='/changePassword/sucess' element={<SpaceBackground component={<PasswordWarningPage />} />} />
        <Route path='recoverpassword/recoveryemailsent' element={<SendingEmailRecoveryPage />} />
        <Route path='/projects/createProjects' element={<CreateProject />} />
        <Route path='/projects/:projectId' element={<PreviewProject />} />
        <Route path='/Eventes' element={<Eventes />} />
        <Route path='/Menssagens' element={<Menssagens />} />
        <Route path='/Perfil' element={<PerfilCliente />} />
        <Route path='/Perfil/Freelancer' element={<PerfilFreelancer />} />
        <Route path='/Perfil/Edit' element={<UpdateEdit />} />
        {/* <Route path='/projects/requirements/visualizationFreelancers' element={<ProjectsvisualizationFreelancersAll id='' />} /> */}
        <Route path='/projects/requirements/:projectId' element={<ProjectRequirements />} />
        <Route path='/projects/allfreelancerview' element={<AllFreelancerView />} />
        <Route path='/projects/selectFreelancer' element={<ProjectsSelecetFreelancer />} />

        <Route path='/projects/allfreelancerview/:projectId' element={<AllFreelancerView />} />
        <Route path='/projects/selectFreelancer/:projectId' element={<ProjectsSelecetFreelancer />} />


        {/* */}
        <Route path='/teste/:projectId' element={<PreviewProjectCreator />} />


        <Route path='/testeprofile' element={<Profile/>} />

      </Routes>



    </>
  );
}

export default App;
