import { uniqueId } from "lodash";

const useCharge = () => {
  const select_months = [
    {
      display_field: "January",
      value_field: "01",
      id_field: uniqueId(),
    },
    {
      display_field: "Feburary",
      value_field: "02",
      id_field: uniqueId(),
    },
    {
      display_field: "March",
      value_field: "03",
      id_field: uniqueId(),
    },
    {
      display_field: "April",
      value_field: "04",
      id_field: uniqueId(),
    },
    {
      display_field: "May",
      value_field: "05",
      id_field: uniqueId(),
    },
    {
      display_field: "June",
      value_field: "06",
      id_field: uniqueId(),
    },
    {
      display_field: "July",
      value_field: "07",
      id_field: uniqueId(),
    },
    {
      display_field: "August",
      value_field: "08",
      id_field: uniqueId(),
    },

    {
      display_field: "September",
      value_field: "09",
      id_field: uniqueId(),
    },
    {
      display_field: "October",
      value_field: "10",
      id_field: uniqueId(),
    },
    {
      display_field: "November",
      value_field: "11",
      id_field: uniqueId(),
    },
    {
      display_field: "December",
      value_field: "12",
      id_field: uniqueId(),
    },
  ];

  const select_years = [
    {
      display_field: "2022",
      value_field: "2022",
      id_field: uniqueId(),
    },
    {
      display_field: "2023",
      value_field: "2023",
      id_field: uniqueId(),
    },
    {
      display_field: "2024",
      value_field: "2024",
      id_field: uniqueId(),
    },

    {
      display_field: "2025",
      value_field: "2025",
      id_field: uniqueId(),
    },

    {
      display_field: "2026",
      value_field: "2026",
      id_field: uniqueId(),
    },
    {
      display_field: "2027",
      value_field: "2027",
      id_field: uniqueId(),
    },
    {
      display_field: "2028",
      value_field: "2028",
      id_field: uniqueId(),
    },
    {
      display_field: "2029",
      value_field: "2029",
      id_field: uniqueId(),
    },
    {
      display_field: "2030",
      value_field: "2030",
      id_field: uniqueId(),
    },
    {
      display_field: "2031",
      value_field: "2031",
      id_field: uniqueId(),
    },
    {
      display_field: "2032",
      value_field: "32",
      id_field: uniqueId(),
    },
    {
      display_field: "2033",
      value_field: "2033",
      id_field: uniqueId(),
    },
    {
      display_field: "2034",
      value_field: "2034",
      id_field: uniqueId(),
    },
    {
      display_field: "2035",
      value_field: "2035",
      id_field: uniqueId(),
    },
  ];

  return {
    select_months,
    select_years,
  };
};

export default useCharge;
