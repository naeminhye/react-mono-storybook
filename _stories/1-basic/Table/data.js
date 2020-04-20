const columns = [
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
];

const dataSource = [
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
];

export { columns, dataSource };
