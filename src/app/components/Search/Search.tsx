import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";
import UserSearchResult from "./UserSearchResult";
import RepositorySearchResult from "./RepositorySearchResult";

export default function SearchForm() {
  const classes = useStyles();
  const [searchType, setType] = React.useState("repositories");
  const [userInput, setInput] = React.useState("");

  const setSearchType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };

  const setUserInput = (event: React.ChangeEvent<{ value: string }>) => {
    console.log(event.target.value);
    setInput(event.target.value as string);
  };

  return (
    <div className={classes.container}>
      <Container className={classes.searchForm}>
        <h1 className={classes.title}>SEARCH</h1>
        <div>
          <OutlinedInput
            className={classes.input}
            value={userInput}
            onChange={setUserInput}
            placeholder={searchType}
          />
          <FormControl
            required
            variant="outlined"
            className={classes.formControl}
          >
            <Select value={searchType} onChange={setSearchType}>
              <MenuItem value={"repositories"}>Repositories</MenuItem>
              <MenuItem value={"users"}>Users</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Container>
      {searchType === "repositories" ? (
        <RepositorySearchResult input={userInput} />
      ) : (
        <UserSearchResult input={userInput} />
      )}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundAttachment: "fixed",
      background:
        "linear-gradient(180deg, rgba(43,49,55,1) 0%, rgba(105,105,105,1) 100%)",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      paddingBottom: "20%",
    },
    searchForm: {
      padding: "1%",
      width: "80%",
      borderRadius: "15px",
      backgroundColor: "#fafbfc",
      textAlign: "center",
      color: "#2b3137",
    },
    input: {
      width: "90%",
    },
    title: {
      marginBottom: "3%",
    },
  })
);
