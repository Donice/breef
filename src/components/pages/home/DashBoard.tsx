import React from 'react'
import './Dashboard.css'
import navigation from './navigation'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { BiSearchAlt } from 'react-icons/bi'

const DashBoard = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="logo-details">
          <i className='bx bxl-c-plus-plus'></i>
          <span className="logo_name">Breef</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              <i className=''><MdOutlineSpaceDashboard /></i>

              <span className="links_name">Dashboard</span>
            </a>
          </li>


          {navigation.map((item) => (
            <li>
              <a href={item.href}>

                {/* {icons.map((items) => ( */}
                <i className='bx bx-grid-alt'>{item.icons}</i>
                {/* ))} */}
                <span className="links_name">{item.name}</span>
              </a>
            </li>
          ))}

        </ul>
      </div>

      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className='bx bx-menu sidebarBtn'></i>
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className='bx bx-search' ><BiSearchAlt /></i>

          </div>
          <div className="profile-details">
            {/* <!--<img src="images/profile.jpg" alt="">--> */}
            <span className="admin_name">Don Ubaru</span>
            <i className='bx bx-chevron-down' ></i>
          </div>
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Order</div>
                <div className="number">40,876</div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">from yesterday</span>
                </div>
              </div>
              <i className='bx bx-cart-alt cart'></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Sales</div>
                <div className="number">38,876</div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">Up fro yesterday</span>
                </div>
              </div>
              <i className='bx bxs-cart-add cart two' ></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Profit</div>
                <div className="number">$12,876</div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className='bx bx-cart cart three' ></i>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Total Return</div>
                <div className="number">31,086</div>
                <div className="indicator">
                  <i className='bx bx-down-arrow-alt down'></i>
                  <span className="text">Down From Today</span>
                </div>
              </div>
              <i className='bx bxs-cart-download cart four' ></i>
            </div>
          </div>

          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Recent Sales</div>
              <div className="sales-details">
                <ul className="details">
                  <li className="topic">Date</li>
                  <li><a href="#">02 Jan 2021</a></li>
                  <li><a href="#">02 Jan 2021</a></li>
                  <li><a href="#">02 Jan 2021</a></li>
                  <li><a href="#">02 Jan 2021</a></li>
                  <li><a href="#">02 Jan 2021</a></li>
                  <li><a href="#">02 Jan 2021</a></li>
                  <li><a href="#">02 Jan 2021</a></li>
                </ul>
                <ul className="details">
                  <li className="topic">Customer</li>
                  <li><a href="#">Alex Doe</a></li>
                  <li><a href="#">David Mart</a></li>
                  <li><a href="#">Roe Parter</a></li>
                  <li><a href="#">Diana Penty</a></li>
                  <li><a href="#">Martin Paw</a></li>
                  <li><a href="#">Doe Alex</a></li>
                  <li><a href="#">Aiana Lexa</a></li>
                  <li><a href="#">Rexel Mags</a></li>
                  <li><a href="#">Tiana Loths</a></li>
                </ul>
                <ul className="details">
                  <li className="topic">Sales</li>
                  <li><a href="#">Delivered</a></li>
                  <li><a href="#">Pending</a></li>
                  <li><a href="#">Returned</a></li>
                  <li><a href="#">Delivered</a></li>
                  <li><a href="#">Pending</a></li>
                  <li><a href="#">Returned</a></li>
                  <li><a href="#">Delivered</a></li>
                  <li><a href="#">Pending</a></li>
                  <li><a href="#">Delivered</a></li>
                </ul>
                <ul className="details">
                  <li className="topic">Total</li>
                  <li><a href="#">$204.98</a></li>
                  <li><a href="#">$24.55</a></li>
                  <li><a href="#">$25.88</a></li>
                  <li><a href="#">$170.66</a></li>
                  <li><a href="#">$56.56</a></li>
                  <li><a href="#">$44.95</a></li>
                  <li><a href="#">$67.33</a></li>
                  <li><a href="#">$23.53</a></li>
                  <li><a href="#">$46.52</a></li>
                </ul>
              </div>
              <div className="button">
                <a href="#">See All</a>
              </div>
            </div>
            <div className="top-sales box">
              <div className="title">Top Seling Product</div>
              <ul className="top-sales-details">
                <li>
                  <a href="#">
                    {/* <!--<img src="images/sunglasses.jpg" alt="">--> */}
                    <span className="product">Vuitton Sunglasses</span>
                  </a>
                  <span className="price">$1107</span>
                </li>
                <li>
                  <a href="#">
                    {/* <!--<img src="images/jeans.jpg" alt="">--> */}
                    <span className="product">Hourglass Jeans </span>
                  </a>
                  <span className="price">$1567</span>
                </li>
                <li>
                  <a href="#">
                    {/* <!-- <img src="images/nike.jpg" alt="">--> */}
                    <span className="product">Nike Sport Shoe</span>
                  </a>
                  <span className="price">$1234</span>
                </li>
                <li>
                  <a href="#">
                    {/* <!--<img src="images/scarves.jpg" alt="">--> */}
                    <span className="product">Hermes Silk Scarves.</span>
                  </a>
                  <span className="price">$2312</span>
                </li>
                <li>
                  <a href="#">
                    {/* <!--<img src="images/blueBag.jpg" alt="">--> */}
                    <span className="product">Succi Ladies Bag</span>
                  </a>
                  <span className="price">$1456</span>
                </li>
                <li>
                  <a href="#">
                    {/* <!--<img src="images/bag.jpg" alt="">--> */}
                    <span className="product">Gucci Womens's Bags</span>
                  </a>
                  <span className="price">$2345</span>
                </li>
                <li>
                  <a href="#">
                    {/* <!--<img src="images/addidas.jpg" alt="">--> */}
                    <span className="product">Addidas Running Shoe</span>
                  </a>
                  <span className="price">$2345</span>
                </li>
                <li>
                  <a href="#">
                    {/* <!--<img src="images/shirt.jpg" alt="">--> */}
                    <span className="product">Bilack Wear's Shirt</span>
                  </a>
                  <span className="price">$1245</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DashBoard