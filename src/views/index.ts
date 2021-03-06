// Raíz
import AddUser from './admin/AddUser'
import DeleteUserTable from './admin/DeleteUserTable'
// Admin
import gestionarUsuarios from './admin/GestionarUsuarios'
import ModifyUser from './admin/ModifyUser'
import ModifyUserTable from './admin/ModifyUserTable'
import CensusData from './CensusData'
import Election from './Election'
import Home from './Home'
import Login from './Login'
import Logo from './Logo'
import Census from './Menu/Census'
import MenuAdmin from './Menu/MenuAdmin'
import MenuButton from './Menu/MenuButton'
import MenuCrearEleccion from './Menu/MenuCrearEleccion'
import MenuResultados from './Menu/MenuResultados'
import MenuSecretary from './Menu/MenuSecretary'
import MenuEliminarElecciones from './Menu/MenuSecretary/MenuEliminarElecciones'
// Menu
import MenuUser from './Menu/MenuUser'
import AlreadyVoted from './Overlays/AlreadyVoted'
import NotFound from './Overlays/NotFound'
import ProcesoCreadoOverlay from './Overlays/ProcesoCreado'
import ProcesoEliminadoOverlay from './Overlays/ProcesoEliminado'
import ProcesoModificadoOverlay from './Overlays/ProcesoModificado'
import SeguroEliminadoProcesoOverlay from './Overlays/SeguroEliminadoProceso'
import SeguroEliminadoUsuarioOverlay from './Overlays/SeguroEliminadoUsuario'
import SeguroPublicacionOverlay from './Overlays/SeguroPublicacion'
import UsuarioCreadoOverlay from './Overlays/UsuarioCreado'
import UsuarioEliminadoOverlay from './Overlays/UsuarioEliminado'
import UsuarioModificadoOverlay from './Overlays/UsuarioModificado'
import Success from './Overlays/VotoRegistrado'
// Overlays
import PickRoleAdmin from './PickRole/Admin'
import PickRoleSecretary from './PickRole/Secretary'
import ResultsElection from './Resultados/Election'
import ResultsPoll from './Resultados/Poll'
// Secretario
import CrearEleccion from './Secretary/Crear/ProcesoElectoral'
import CrearVotacion from './Secretary/Crear/Votacion'
import Votacion from './Votacion'

const VotoRegistradoOverlay = Success
export {
  Login,
  Logo,
  Home,
  PickRoleAdmin,
  PickRoleSecretary,
  Census,
  MenuAdmin,
  MenuSecretary,
  MenuUser,
  MenuButton,
  Votacion,
  Election,
  Success,
  MenuCrearEleccion,
  CrearEleccion,
  CrearVotacion,
  MenuResultados,
  ResultsElection,
  ResultsPoll,
  MenuEliminarElecciones,
  gestionarUsuarios,
  AddUser,
  ModifyUserTable,
  ModifyUser,
  DeleteUserTable,
  CensusData,
  NotFound,
  ProcesoCreadoOverlay,
  ProcesoModificadoOverlay,
  ProcesoEliminadoOverlay,
  SeguroEliminadoProcesoOverlay,
  SeguroEliminadoUsuarioOverlay,
  SeguroPublicacionOverlay,
  UsuarioCreadoOverlay,
  UsuarioModificadoOverlay,
  UsuarioEliminadoOverlay,
  AlreadyVoted,
  VotoRegistradoOverlay,
}
