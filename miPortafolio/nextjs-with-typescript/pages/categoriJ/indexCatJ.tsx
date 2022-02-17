import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../../src/Link';
import ProTip from '../../src/ProTip';
import Copyright from '../../src/Copyright';
//Navbar
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


import Stack from '@mui/material/Stack';


const pages = [
      'DESARROLLADOR DE SOFTWARE',
      'CONTADORÍA & ADMINISTRACIÓN',
      'ELECTRÓNICA E INVESTIGACIÓN', 
      'POSTGRADO',
      'OTROS',
    ];


const settings = [
      'Contacto', 
      'Configuración'
    ];


const categoriA=pages[0];
const categoriB=pages[1];
const categoriC=pages[2];
const categoriD=pages[3];
const categoriE=pages[4];
const categoriF=pages[5];
const categoriG=pages[6];
const categoriH=pages[7];
const categoriI=pages[8];
const categoriJ=pages[9];

const setA=settings[0];
const setB=settings[1];

const indexCatJ: NextPage = () => {

  // Constantes Navbar 
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // Constantes Navbar

  return (
    <AppBar position="static" >
      {/* Navbar */}
      <Container maxWidth="xl" >
        {/* Navbar completo */}
        <Toolbar disableGutters >
        <Box sx={{ flexGrow: 0 }}>
          {/* Avatar */}
            <Tooltip title="Abrir">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/ddllgbo70/image/upload/v1638329234/assetsPortafolioMiguelPaez/miguelFoto100x100Jpg_hkft5u.jpg" />
              </IconButton>
            </Tooltip>
          {/* Avatar */}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* PERFIL A */}
              <Link href="/set/contacto">         
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Typography textAlign="center" color="primary">{setA}</Typography>              
              </Button>
              </Link>
              {/* PERFIL B */}
              <Link href="https://www.google.com" target="_Blank"> 
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Typography textAlign="center" color="primary">{setB}</Typography> 
              </Button>
              </Link>
            </Menu>
          </Box>
          {/* Logo o nombre */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            MIGUEL PÁEZ 
          </Typography>
          {/* Logo o nombre */}
          {/* Menú desplegable con dispositivos moviles  */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* CATEGORIA A */}
              <Link href="/categoriA/indexCatA">         
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Typography textAlign="center" color="primary">{categoriA}</Typography>              
              </Button>
              </Link>
              {/* CATEGORIA B */}
              <Link href="/categoriB/indexCatB"> 
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Typography textAlign="center" color="primary">{categoriB}</Typography> 
              </Button>
              </Link>
              {/* CATEGORIA C */}
              <Link href="/categoriC/indexCatC">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Typography textAlign="center" color="primary">{categoriC}</Typography> 
              </Button>
              </Link>
              {/* CATEGORIA D */}
              <Link href="/categoriD/indexCatD">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Typography textAlign="center" color="primary">{categoriD}</Typography>                 
              </Button>
              </Link>
              {/* CATEGORIA E */}
              <Link href="/categoriE/indexCatE">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Typography textAlign="center" color="primary">{categoriE}</Typography>                
              </Button>
              </Link>
              {/* CATEGORIA F */}
              <Link href="/categoriF/indexCatF">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Typography textAlign="center" color="primary">{categoriF}</Typography>                
              </Button>
              </Link>
              {/* CATEGORIA G */}
              <Link href="/categoriG/indexCatG">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Typography textAlign="center" color="primary">{categoriG}</Typography>                
              </Button>
              </Link>
              {/* CATEGORIA H */}
              <Link href="/categoriH/indexCatH">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Typography textAlign="center" color="primary">{categoriH}</Typography>                 
              </Button>
              </Link>
              {/* CATEGORIA I */}
              <Link href="/categoriI/indexCatI">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Typography textAlign="center" color="primary">{categoriI}</Typography>                
              </Button>
              </Link>
              {/* CATEGORIA J */}
              <Link href="/categoriJ/indexCatJ">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Typography textAlign="center" color="primary">{categoriJ}</Typography>               
              </Button>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            {categoriB}
          </Typography>
          {/* Menú desplegable con dispositivos moviles  */}
          
          {/* Navbar con pantalla de escritorio */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* CATEGORIA A */}
              <Link href="/categoriA/indexCatA">         
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              {categoriA}
              </Button>
              </Link>
              {/* CATEGORIA B */}
              <Link href="/categoriB/indexCatB"> 
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              {categoriB}
              </Button>
              </Link>
              {/* CATEGORIA C */}
              <Link href="/categoriC/indexCatC">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              {categoriC}
              </Button>
              </Link>
              {/* CATEGORIA D */}
              <Link href="/categoriD/indexCatD">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              {categoriD}                
              </Button>
              </Link>
              {/* CATEGORIA E */}
              <Link href="/categoriE/indexCatE">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              {categoriE}                
              </Button>
              </Link>
              {/* CATEGORIA F */}
              <Link href="/categoriF/indexCatF">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              {categoriF}                
              </Button>
              </Link>
              {/* CATEGORIA G */}
              <Link href="/categoriG/indexCatG">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              {categoriG}                
              </Button>
              </Link>
              {/* CATEGORIA H */}
              <Link href="/categoriH/indexCatH">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              {categoriH}                
              </Button>
              </Link>
              {/* CATEGORIA I */}
              <Link href="/categoriI/indexCatI">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              {categoriI}                
              </Button>
              </Link>
              {/* CATEGORIA J */}
              <Link href="/categoriJ/indexCatJ">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                variant="contained"
              >
              {categoriJ}                
              </Button>
              </Link>
          </Box>
          {/* Navbar con pantalla de escritorio */}
        </Toolbar>
        {/* Navbar completo */}
      </Container>
      {/* Navbar */}
      
    </AppBar>

  );
};

export default indexCatJ;