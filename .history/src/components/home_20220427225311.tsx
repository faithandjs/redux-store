import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setItems,
  storeData,
  storeItems,
  restExpandedStatus,
} from "../features/dataSlice";
import { dataState, objectType, objArr, msg } from "../type";
import "./style/home.scss";
import { Link, useNavigate } from "react-router-dom";
import { calculateTotal, newItem, cart } from "../features/cartSlice";
import { bgRotation, CartImg, Message, setDisplay } from "./extras";
import searchImg from "./images/search.png";
import filter from "./images/filter.png";
import "./style/extras.scss";
import { setState } from "../features/cartItemSlice";
import { Rating } from "react-simple-star-rating";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data: dataState = useSelector(storeData);
  //  const cartState: objArr = useSelector(cart);
  const [currentCategory, setCurrentCategory] = useState<objectType[]>(
    data.data.items
  );
  const [current, setCurrent] = useState<objectType[]>(data.data.items);
  const [inputvalue, setInputValue] = useState("");
  const path = "item" + data.expandedItem.item.id;
  const passed = useRef(false);
  const passed2 = useRef(false);
  const passed3 = useRef(false);
  const value = useRef("all");
  const error = useRef(0);

  let pageContent;
  let reload;
  const box = (item: objectType) => {
    //
    return (
      <div
        key={item.id}
        className="item-box"
        onClick={() => dispatch(setItems(item))}
      >
        <div className="image-box">
          <img src={item.image} />
        </div>
        <div className="details-box" onClick={() => dispatch(setItems(item))}>
          <div className="title">{item.title}</div>
          <div className="price-star">
            <div className="price">${item.price}</div>
            <div className="rating">
              {item.rating.rate}{" "}
              <Rating ratingValue={100} iconsCount={1} readonly />
            </div>
          </div>
          {/*<div className="button-box">
            <button
              onClick={() => {
                setTimeout(() => {
                  setDisplay();
                }, 500);
                if (
                  !cartState.cartItems.items.some(
                    (itemX) => itemX.id === item.id
                  )
                ) {
                  dispatch(newItem(item));
                }
                dispatch(calculateTotal());
                check(item);
              }}
            >
              <span>add to cart</span>
            </button>
          </div>*/}
        </div>
      </div>
    );
  };
  useEffect(() => {
    if (
      data.data.status === 3 &&
      value.current === "all" &&
      currentCategory.length === 0
    ) {
      setCurrentCategory(data.data.items);
    }
  });
  useEffect(() => {
    if (data.data.status === 1) {
      dispatch(storeItems());
    }
  }, [dispatch, data.data.status]);
  useEffect(() => {
    if (data.expandedItem.status === 3) {
      navigate(`${path}`, { replace: false });
      dispatch(restExpandedStatus());
    }
  }, [data.expandedItem.status]);
  switch (data.data.status) {
    default:
      pageContent = <div>default</div>;
      break;
    /*  case 1:
    case 2:
      pageContent = <div>loading</div>;
      break;*/
    case 3:
      if (
        (current.length !== 0 && !passed2.current) ||
        (current.length !== 0 && passed2.current)
      ) {
        passed2.current = true;
        pageContent = current.map((item: any) => {
          return <>{box(item)}</>;
        });
      } else if (current.length === 0 && !passed2.current) {
        passed2.current = true;
        pageContent = data.data.items.map((item: objectType) => {
          return <>{box(item)}</>;
        });
      } else if (current.length === 0 && passed2.current) {
        pageContent = (
          <div>
            "{inputvalue}" not found in "{value.current}"
          </div>
        );
      }

      break;
    case 4:
      if (error.current < 20) {
        dispatch(storeItems());
        error.current++;
        reload = <div className="reloading">Reloading... </div>
        console.log(error.current, reload);
      } else {
        console.log(error.current, "error");
      }
  }
  const categorySelected = () => {
    if (value.current === "all") {
      setCurrentCategory(data.data.items);
    } else {
      let arr: objectType[] = [];
      data.data.items.map((item) => {
        if (item.category === value.current) {
          arr.push(item);
        }
      });
      setCurrentCategory(arr);
    }
  };
  const search = () => {
    if (inputvalue !== "") {
      let arr: objectType[] = [];
      currentCategory.map((item) => {
        if (
          item.title
            .toLowerCase()
            .split(" ")
            .join("")
            .includes(`${inputvalue.toLowerCase().split(" ").join("")}`)
        ) {
          arr.push(item);
        }
      });
      setCurrent(arr);
    } else {
      setCurrent(currentCategory);
    }
  };
  useEffect(() => {
    if (passed3.current) {
      search();
    }
    passed3.current = true;
  }, [inputvalue, currentCategory]);
  useEffect(() => {
    bgRotation("home-bg");
    if (data.data.items.length !== 0 && !passed.current) {
      setCurrent(data.data.items);
      passed.current = true;
    }
  });
  const addModal = () => {
    const categoriesBox = document.querySelector(".categories");
    console.log(categoriesBox?.classList);
    if (categoriesBox?.classList.contains("modal")) {
      categoriesBox.classList.remove("modal");
    } else {
      categoriesBox?.classList.add("modal");
    }
  };
  return (
    <div className="before">
      {data.data.status !== 3 && (
        <div className="svg">
          <svg
            id="svg-spinner"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <circle cx="24" cy="4" r="4" fill="#fff" />
            <circle cx="12.19" cy="7.86" r="3.7" fill="#fff" />
            <circle cx="5.02" cy="17.68" r="3.4" fill="#fff" />
            <circle cx="5.02" cy="30.32" r="3.1" fill="#fff" />
            <circle cx="12.19" cy="40.14" r="2.8" fill="#fff" />
            <circle cx="24" cy="44" r="2.5" fill="#fff" />
            <circle cx="35.81" cy="40.14" r="2.2" fill="#fff" />
            <circle cx="42.98" cy="30.32" r="1.9" fill="#fff" />
            <circle cx="42.98" cy="17.68" r="1.6" fill="#fff" />
            <circle cx="35.81" cy="7.86" r="1.3" fill="#fff" />
          </svg>
          {reload}
        </div>
      )}
      {data.data.status === 3 && (
        <div className="home">
          <Message />
          <div className="nav">
            <h1>BUYBUY</h1>

            <CartImg path="/" />
          </div>
          <div className="input-categories">
            <div className="input-box">
              {/* <div className="image">
              <img src={searchImg} />
            </div>
*/}
              <input
                type="text"
                placeholder="Search for item"
                onChange={(evt: React.FormEvent<HTMLInputElement>) => {
                  passed3.current = true;
                  setInputValue((evt.target as HTMLInputElement).value);
                }}
              />
              <div className="categories" onClick={() => addModal()}>
                <div className="image">
                  <img src={filter} />
                </div>
                <div className="options">
                  <div
                    onClick={() => {
                      value.current = "all";
                      categorySelected();
                    }}
                  >
                    all
                  </div>
                  <div
                    onClick={() => {
                      value.current = "women's clothing";
                      categorySelected();
                      addModal();
                    }}
                  >
                    women's clothing
                  </div>
                  <div
                    onClick={() => {
                      value.current = "men's clothing";
                      categorySelected();
                      addModal();
                    }}
                  >
                    men's clothing
                  </div>
                  <div
                    onClick={() => {
                      value.current = "jewelery";
                      categorySelected();
                      addModal();
                    }}
                  >
                    jewelery
                  </div>
                  <div
                    onClick={() => {
                      value.current = "electronics";
                      categorySelected();
                      addModal();
                    }}
                  >
                    electronics
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-content">{pageContent}</div>
        </div>
      )}
    </div>
  );
}

export default Home;
