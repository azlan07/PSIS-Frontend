import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { whoAmI } from '../actions/authActions';
import Logo from '../../public/assets/images/LogoPsis.svg';

const pages = ['E-Surek', 'E-Lapor', 'E-Kaba'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { whoAmIResult } = useSelector((state) => state.authReducer);
  const Token = localStorage.getItem('token');
  const roleAdmin = localStorage.getItem('role');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(whoAmI());
  }, [dispatch]);

  useEffect(() => {
    setIsLoggedIn(!!Token);
  }, [Token]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav('');
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser('');
  };

  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.reload();
  }

  return (
    <AppBar position="fixed" style={{ backgroundColor: '#87CBB9', zIndex: 1000 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            src={Logo}
            alt="logo"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            className="w-12 mr-3"
          />
          <Typography
            className="text-keempat"
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            PSIS
          </Typography>

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
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page.toLowerCase()}`}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>

          <Avatar
            src={Logo}
            alt="logo"
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          />
          <Typography
            className="text-keempat"
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            PSIS
          </Typography>

          <Box sx={{ marginLeft: 3, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={page === 'E-Surek' ? '/' : `/${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? (
              <Tooltip title="Menu Profil">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Typography variant="body1" sx={{ marginRight: 2, textTransform: 'uppercase', fontWeight: 'bold' }}>
                    {whoAmIResult.name}
                  </Typography>
                  <Avatar src={whoAmIResult.image} alt="User" />
                </IconButton>
              </Tooltip>
            ) : (
              <a href="/login" className='bg-lima hover:bg-tiga text-white text-lg py-2 px-4 rounded-md inline-flex items-center transition duration-300 ease-in-out'>Masuk</a>
            )}


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
              {!isLoggedIn && (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/login">
                      Login
                    </Link>
                  </Typography>
                </MenuItem>
              )}
              {isLoggedIn && (
                <>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link style={{ textDecoration: 'none', color: 'black' }} to="/profile">
                        Profil Pengguna
                      </Link>
                    </Typography>
                  </MenuItem>
                  {roleAdmin === 'admin' && (
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        <Link
                          style={{ textDecoration: 'none', color: 'black' }}
                          to="/dashboardAdmin"
                        >
                          Dashboard Admin
                        </Link>
                      </Typography>
                    </MenuItem>
                  )}
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to="/tableSurek"
                      >
                        Pengajuan Surat
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to="/historySurek"
                      >
                        History Surat
                      </Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">
                      <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                        Keluar
                      </Link>
                    </Typography>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
