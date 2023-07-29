import logo from './Logo.svg';
import './App.css';
import placeHolder from './Placeholder.png';

function App() {
  return (
    <div className='container'>
      <header>
        <nav>
          <img src={logo} alt='gravity'></img>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Our Apps</a>
            </li>
            <li>
              <a href='#'>Clients</a>
            </li>
            <li>
              <a href='#'>Contacts</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className='hero'>
          <div className='left'>
            <p className='title'>SHOOTING STAR</p>
            <h3>The Amazing Hubble</h3>
            <p className='description'>
              In efforts to expand our horizons, we welcome every
              investment-minded individual to join us in the Condotel Investment
              Opportunity.
            </p>
            <div className='buttons-container'>
              <button>GET STARTED</button>
              <button>LEARN MORE</button>
            </div>
          </div>
          <div className='right'>
            <img src={placeHolder} alt='' />
          </div>
        </div>
      </main>
      <footer>
        <div className='social-icons'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.032 19C15.0696 19 18.372 13.6132 18.372 8.94228C18.372 8.78894 18.372 8.63646 18.3624 8.48484C19.0048 7.98518 19.5592 7.36492 20 6.65506C19.4016 6.94107 18.7656 7.12887 18.1152 7.21158C18.8 6.76964 19.3128 6.07529 19.5584 5.25603C18.9136 5.66781 18.2088 5.95813 17.4736 6.11406C16.2304 4.6909 14.1512 4.62198 12.8288 5.96071C11.9768 6.82391 11.6144 8.11096 11.8792 9.33856C9.24 9.19555 6.7808 7.85337 5.1136 5.64541C4.2424 7.26068 4.688 9.3265 6.1304 10.3637C5.608 10.3473 5.0968 10.1957 4.64 9.92178V9.96657C4.6408 11.649 5.7424 13.098 7.2736 13.4314C6.7904 13.5736 6.2832 13.5942 5.792 13.4917C6.2216 14.9321 7.4544 15.9185 8.8584 15.9469C7.696 16.9307 6.26 17.4649 4.7816 17.4631C4.5208 17.4623 4.26 17.4459 4 17.4123C5.5016 18.4495 7.248 19 9.032 18.9974" fill="white"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 19H16.9231V13.3967C16.9231 11.8596 16.2715 11.0022 15.1031 11.0022C13.8315 11.0022 13.0769 11.8956 13.0769 13.3967V19H10V8.59243H13.0769V9.76288C13.0769 9.76288 14.0423 8 16.2177 8C18.3938 8 20 9.3818 20 12.2415C20 15.1004 20 19 20 19ZM5.50031 6C4.67151 6 4 5.32819 4 4.4997C4 3.67181 4.67151 3 5.50031 3C6.32849 3 7 3.67181 7 4.4997C7.00061 5.32819 6.32849 6 5.50031 6ZM4 19H7V9H4V19Z" fill="white"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8751 10.6027H12.1479C12.1479 11.3023 12.1479 12.7015 12.1436 13.4011H16.0418C15.8925 14.1007 15.3628 15.0802 14.6145 15.5734C14.6138 15.5727 14.6131 15.5776 14.6116 15.5769C13.6167 16.2338 12.3037 16.3829 11.3288 16.187C9.80069 15.8833 8.59134 14.7752 8.10032 13.3675C8.10317 13.3654 8.10532 13.3459 8.10746 13.3445C7.80012 12.4714 7.80012 11.3023 8.10746 10.6027H8.10675C8.50272 9.31683 9.74851 8.14359 11.2788 7.82247C12.5096 7.56152 13.8983 7.84416 14.9197 8.79982C15.0555 8.6669 16.7995 6.96405 16.9303 6.82553C13.4409 3.66541 7.85373 4.77708 5.7631 8.85789H5.76239C5.76239 8.85789 5.7631 8.85789 5.75882 8.86558C4.72458 10.87 4.76747 13.2318 5.76596 15.1404C5.7631 15.1425 5.76096 15.1438 5.75882 15.1459C6.66368 16.902 8.31045 18.2487 10.2946 18.7615C12.4024 19.3142 15.0848 18.9364 16.8817 17.3112C16.8824 17.3119 16.8831 17.3126 16.8838 17.3133C18.4062 15.9421 19.354 13.6061 18.8751 10.6027Z" fill="white"/>
</svg>
        </div>
      </footer>
    </div>
  );
}

export default App;
