import React from "react";
import "./Category.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/7679682/pexels-photo-7679682.jpeg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/sale">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2308883/pexels-photo-2308883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link to="/products/women" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/8400603/pexels-photo-8400603.jpeg"
            alt=""
          />
          <button>
            <Link to="/products/new-season" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg"
                alt=""
              />
              <button>
                <Link to="/products/Men" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/1476055/pexels-photo-1476055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <button>
                <Link to="/products/accessories" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link to="/products/shoes" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

// import "./Category.scss";
// import React from "react";
// import { Link } from "react-router-dom";

// const Category = () => {
//   return (
//     <>
//       <div className="category">
//         <div className="catContainer">
//           <div className="col">
//             <div className="row">
//               <div className="img">
//                 <img
//                   src="https://images.pexels.com/photos/7679682/pexels-photo-7679682.jpeg"
//                   alt=""
//                 />
//                 <div className="button">
//                   <button>
//                     <Link to="/products/sale">Sale</Link>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="img">
//                 <img
//                   src="https://images.pexels.com/photos/2308883/pexels-photo-2308883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                   alt=""
//                 />
//                 <div className="button">
//                   <button>
//                     <Link to="/products/women">Women</Link>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="row">
//               <div className="img">
//                 <img
//                   src="https://images.pexels.com/photos/8400603/pexels-photo-8400603.jpeg"
//                   alt=""
//                 />
//                 <div className="button">
//                   <button>
//                     <Link to="/products/new-season">New Season</Link>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col col-l">
//             <div className="row">
//               <div className="col">
//                 <div className="row">
//                   <div className="img">
//                     <img
//                       src="https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg"
//                       alt=""
//                     />
//                     <div className="button">
//                       <button>
//                         <Link to="/products/men">Men</Link>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col">
//                 <div className="row">
//                   <div className="img">
//                     <img
//                       src="https://images.pexels.com/photos/1476055/pexels-photo-1476055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                       alt=""
//                     />
//                     <div className="button">
//                       <button>
//                         <Link to="/products/accessories">Accessories</Link>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="img">
//                 <img
//                   src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                   alt=""
//                 />
//                 <div className="button">
//                   <button>
//                     <Link to="/products/shoes">Shoes</Link>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Category;
