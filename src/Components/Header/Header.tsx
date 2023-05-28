import { useState } from 'react';
import { AppBar, Toolbar, Drawer, Typography, Grid } from '@mui/material';


export const Header = ({title}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
        <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <Toolbar>
                <img src="/Images/DRC_Logo.png" alt="DRC Logo" style={{ height: 180, marginRight: 2 }} />
                <Grid container spacing={1}>
                    <Grid item xs={24}>
                        <Typography variant="h4">{title}</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        A bunch of words put together that evoke a sense of opportunity and look good
                    </Grid>
                </Grid>


                
            </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
            {/* Add your side menu content here */}
        </Drawer>
    </>
  );
};
