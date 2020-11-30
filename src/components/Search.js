import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "../axios";
import {
  List,
  ListItem,
  Thumbnail,
  RightItem,
  Clear,
  SearchLabel,
} from "../styles/Search";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  searchRoot: {
    flexGrow: 1,
    //padding: "2px 4px",
    display: "flex",
    //alignItems: "center",
    //width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function Search({ fetchUrl }) {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const request = await axios
        .get(fetchUrl, {
          params: {
            _limit: 10,
          },
        })
        .then((res) => {
          setPosts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) => {
        return post.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, posts]);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Autocomplete Search</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.searchRoot}>
            {/* <SearchBox>
              <FiSearch />
              <SearchInput
                type="text"
                placeholder=""
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </SearchBox> */}
            <IconButton
              type="button"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            {/* <FiSearch /> */}
            <InputBase
              className={classes.input}
              placeholder="Search"
              inputProps={{ "aria-label": "search..." }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Paper>
          <Paper className={classes.paper}>
            <List>
              {filteredPosts.map((post) => (
                <ListItem key={post.id}>
                  <Thumbnail src={post.thumbnailUrl} alt={post.id} />
                  <RightItem>
                    <SearchLabel fontWeight="800"> Name </SearchLabel>
                    <Clear />
                    <SearchLabel fontWeight="400">{post.title}</SearchLabel>
                  </RightItem>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ul>
              {filteredPosts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Search;
