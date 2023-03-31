/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import {Link} from 'react-scroll';
import Logo from "../Assets/Logo.svg";
import { BsSearch } from "react-icons/bs";
import { FaRProject, FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { useLocation, useNavigate } from 'react-router-dom';
import {useRef} from "react";

const Navbar = () => {
  const contact = useRef(null);
  const testimonial = useRef(null);
  const about = useRef(null);
  const terms = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const menuOptions = [
    {
      to: '/',
      text: "Home",
      icon: <HomeIcon/>
    },
    {
      to: '/about',
      text: "About",
      id: 'about',
      icon: <InfoIcon />,
    },
    {
      to: '/testimonials',
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      to: '/contact',
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      to: '/footer',
      text: "Footer"
    },
    {
      to: 'signup',
      text: "Get Started"
    }
  ];

  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            setShow(true);
        } else {
            setShow(false);
        }
    });
  }, []);
  let history = useNavigate();
	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id && location.pathname === '/') {
			scrollTo(id);
		}

		history.push(to);
		setShow(false);
	};

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <ul className="navbar-links">
          <li onClick={()=> scrollToSection(contact)}>
            <Link activeClass="active" smooth spy to="contact">
              Contact
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="testimonials">
              Testimonials
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="about">
            About
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="terms">
            Terms
            </Link>
          </li>
          <li>
            <BsSearch className="navbar-search-icon" />
          </li>
         </ul>
       </div>

       <div className="navbar-menu-container" >
           <HiOutlineBars3 onClick={() => setShow(true)} /> 
       </div>
       {" "}
       {show}
       {" "}
       <Drawer show={show} onClose={() => setShow(false)} anchor="right">
         <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setShow(false)}
          onKeyDown={() => setShow(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
    );
};

export default Navbar;
