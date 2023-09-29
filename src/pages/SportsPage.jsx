import React, { Component, Fragment } from "react";
import axios from "axios";
import PostCard from "../components/card/PostCard";
import { toast } from "react-toastify";
import Loading from "../components/shares/Loading";
import { LIMIT } from "../constants";


export class SportsPage extends Component {
    state = {
        posts: [],
        loading: false,
        total: 0,
        search: "",
        activePage: 1,
      };
      async getPosts(search = "", page = 1) {
        try {
          this.setState({ loading: true });
          let { data } = await axios.get(
            "https://fakestoreapi.com/products?limit=5/posts",
            { params: { q: search, _page: page, _limit: LIMIT } }
          );
          let { data: allData } = await axios.get(
            "https://fakestoreapi.com/products?limit=5/posts",
            { params: { q: search } }
          );
          this.setState({ posts: data, total: allData.length,});
        } catch (err) {
          toast.error("Error");
        } finally {
          this.setState({ loading: false });
        }
      }
      componentDidMount() {
        this.getPosts();
      }
      render() {
        const { posts, loading, total, activePage } = this.state;
        const getPage = (page) => {
          this.setState({ activePage: page });
          this.getPosts( page);
        };
        const pages = Math.ceil(total / LIMIT);
        return (
          <Fragment>
            <section>
              <div className="container">
                <h1>PostsPage ({total})</h1>

                {loading ? (
                  <Loading />
                ) : (
                  posts.map((post) => <PostCard key={post.id} {...post} />)
                )}
                {Array(pages)
                  .fill(1)
                  .map((_, i) => (
                    
                    <button
                      className={i + 1 === activePage ? "bg-danger" : ""}
                      onClick={() => getPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
              </div>
            </section>
          </Fragment>
        );
      }
    }
    
export default SportsPage;
