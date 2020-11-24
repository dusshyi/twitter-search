import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "../axios";
import useMediaQuery from "../hooks/useMediaQuery";
import {
  SearchBox,
  SearchInput,
  List,
  ListItem,
  Container,
  Left,
  Right,
  Thumbnail,
  RightItem,
  Clear,
  SearchLabel,
} from "../styles/Search";

function Search({ fetchUrl }) {
  const matches = useMediaQuery("(min-width: 1005px)");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    // axios
    //   .get("https://jsonplaceholder.typicode.com/photos")
    //   .then((res) => {
    //     setPosts(res.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

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

  const SearchPanel = (
    <div>
      <SearchBox>
        <FiSearch />
        <SearchInput
          type="text"
          placeholder=""
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </SearchBox>
      <Clear />
      <div style={{ position: "absolute", marginTop: "50px" }}>
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
      </div>
    </div>
  );

  const BigScreen = (
    <Container>
      <Left>{SearchPanel}</Left>

      <Right>
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </Right>
    </Container>
  );

  return <div>{matches ? BigScreen : SearchPanel}</div>;
}

export default Search;
