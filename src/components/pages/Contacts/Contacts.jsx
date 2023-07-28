import s from "./Contacts.module.scss";

function Contacts() {
  return (
    <div className={s.contacts}>
      <div className={s.contact}>
        <div className={s.chatLink}>
          <div className={s.title}>Customer support</div>
          <div className={s.mail}>Here can be your E-mail!</div>
          <a
            className={s.linkButton}
            href="https://github.com/VladislavSHAKHOV"
          >
            WRITE
          </a>
        </div>
        <div className={s.chatLink}>
          <div className={s.title}>Service regulations</div>
          <div className={s.description}>Its just for my portfolio!</div>
          <div className={s.description}>Its just for my portfolio!</div>
          <div className={s.description}>Its just for my portfolio!</div>
        </div>
      </div>
      <div className={s.contact}>
        <div className={s.chatLink}>
          <div className={s.title}>About service</div>
          <div className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            iure amet corrupti odio exercitationem est recusandae? Magni maiores
            et ad commodi magnam
          </div>
          <div className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            iure amet corrupti odio exercitationem est recusandae? Magni maiores
            et ad commodi magnam quaerat maxime debitis adipisci sapiente
            deserunt minima dolor, unde exercitationem aperiam quia dolore
            delectus quidem possimus quisquam
          </div>
          <div className={s.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            iure amet corrupti odio exercitationem est recusandae? Magni maiores
            et ad commodi magnam quaerat maxime debitis adipisci sapiente
            deserunt minima dolor, unde exercitationem aperiam quia dolore
            delectus quidem possimus quisquam fugiat nam est at ullam odio. Ipsa
            soluta et eligendi eius.
          </div>
        </div>
      </div>
      <div className={s.contact}>
        <div className={s.chatLink}>
          <div className={s.title}>Our partners</div>
          <div className={s.partners}>
          <div className={s.partner}>partner 1</div>
          <div className={s.partner}>partner 2</div>
          <div className={s.partner}>partner 3</div>
          <div className={s.partner}>partner 4</div>
          <div className={s.partner}>partner 5</div>
          <div className={s.partner}>partner 6</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
