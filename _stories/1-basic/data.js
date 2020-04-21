import React from "react";
import { Icons } from "react-mono";

// Carousel Demo
const carouselData = [
  {
    headline: "Nike Air Force 1 '07 Essential Icon Clash",
    src:
      "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/jrmc5yzbdqrloaat4prz/air-force-1-07-essential-icon-clash-shoe-B4HXPf.jpg",
  },
  {
    headline: "Nike Air Zoom Pegasus 36",
    src:
      "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/rcvjuoidxcq9irtbp5rk/air-zoom-pegasus-36-running-shoe-tBZsLn.jpg",
  },
  {
    headline: "Nike P-6000 Icon Clash",
    src:
      "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/rijdurhjtaopdca3qofp/p-6000-icon-clash-shoe-Cf06tP.jpg",
  },
  {
    headline: "Air Jordan 7 Retro",
    src:
      "https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/t4ege635ov8rjpccsrj7/air-jordan-7-retro-shoe-2XK2cz.jpg",
  },
];

// Checkbox Demo
const transportationOptions = [
  {
    label: "Ship",
    value: "ship",
    icon: <Icons.Ship size={64} />,
  },
  {
    label: "Plane",
    value: "plane",
    icon: <Icons.Plane size={64} />,
  },
  {
    label: "Taxi",
    value: "taxi",
    icon: <Icons.Taxi size={64} />,
  },
  {
    label: "Bus",
    value: "bus",
    icon: <Icons.Bus size={64} />,
  },
  {
    label: "Train",
    value: "train",
    icon: <Icons.Train size={64} />,
  },
];

// RadioBox Demo
const genderOptions = [
    {
      label: "Male",
      value: "male",
      icon: <Icons.Male size={64} />,
    },
    {
      label: "Female",
      value: "female",
      icon: <Icons.Female size={64} />,
    },
  ];

// DropDown Demo
const dropdownOptions = [
  {
    value: "option-1",
    label: "Option 1",
  },
  {
    value: "option-2",
    label: "Option 2",
  },
  {
    value: "option-3",
    label: "Option 3",
  },
  {
    value: "option-4",
    label: "Option 4",
  },
  {
    value: "option-5",
    label: "Option 5",
  },
  {
    value: "option-6",
    label: "Option 6",
  },
  {
    value: "option-7",
    label: "Option 7",
  },
  {
    value: "option-8",
    label: "Option 8",
  },
  {
    value: "option-9",
    label: "Option 9",
  },
  {
    value: "option-10",
    label: "Option 11",
  },
];

// Table Demo
const tableData = {
    dataSource: [
        {
          name: "Steven C Hammons",
          gender: "Male",
          phone: "201-444-8221",
          add: "510 Passaic Street, Ridgewood, New Jersey(NJ), 07450",
          email: "janie_marvi6@yahoo.com",
        },
        {
          name: "Jennifer G Anderson",
          gender: "Female",
          phone: "256-932-7187",
          add: "4046 New Creek Road, Alexander City, Alabama(AL), 35010",
          email: "adolfo_cai8@yahoo.com",
        },
        {
          name: "Richard V Garza",
          gender: "Male",
          phone: "562-964-1656",
          add: "130 Pin Oak Drive, Santa Fe Springs, California(CA), 90670",
          email: "foster1996@yahoo.com",
        },
        {
          name: "Lane B Wolfenbarger",
          gender: "Female",
          phone: "715-849-9361",
          add: "2224 Tea Berry Lane, Wausau, Wisconsin(WI), 54403",
          email: "nick_oconne@yahoo.com",
        },
      ],
      columns: [
        {
          title: "Name",
          key: "name",
          dataIndex: "name",
          sortable: true,
        },
        {
          title: "Gender",
          key: "gender",
          dataIndex: "gender",
        },
        {
          title: "Phone",
          key: "phone",
          dataIndex: "phone",
        },
        {
          title: "Address",
          key: "add",
          dataIndex: "add",
        },
        {
          title: "Email",
          key: "email",
          dataIndex: "email",
        },
      ]
}

export { carouselData, transportationOptions, genderOptions, dropdownOptions, tableData };
