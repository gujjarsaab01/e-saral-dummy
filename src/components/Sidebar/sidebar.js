import React from 'react';

const SideBar = () => {
  const sidebarItems = [
    'Unit & Dimensions',
    'Laws of motion',
    'Thermodynamics',
    'Kinematics',
    'Work, Energy and Power',
    'Electrostatics',
    'Rotational Dynamics',
    'Gravitation',
    'Fluid Dynamics',
    'Unit & Dimensions',
    'Laws of motion',
    'Thermodynamics',
    'Kinematics',
    'Work, Energy and Power',
    'Electrostatics',
    'Rotational Dynamics',
    'Gravitation',
    'Fluid Dynamics',
    'Unit & Dimensions',
    'Laws of motion',
    'Thermodynamics',
    'Kinematics',
    'Work, Energy and Power',
    'Electrostatics',
    'Rotational Dynamics',
    'Gravitation',
    'Fluid Dynamics',
  ];

  return (
    <div className="p-2 mt-5   truncate">
      {sidebarItems.map((item, index) => (
        <h6 className='hover:drop-shadow-2xl' key={index}>{item}</h6>
      ))}
    </div>
  );
};

export default SideBar;