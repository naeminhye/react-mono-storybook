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
    name: "Hieu Nguyen",
    gender: "Male",
    phone: "0362467181",
    add: "297/1 Nguyen Dinh Chieu, Ward 3, Ho Chi Minh City",
  },
];

export { columns, dataSource };
