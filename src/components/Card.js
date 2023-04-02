import React from "react";

const Card = () => {
  const userData = [
    {
      userName: "Dinesh Patel",
      userRefNo: "12345634",
      amount: "Rs 30,000",
      IMG_SRC:
        "https://www.shutterstock.com/image-photo/five-year-kid-passport-photo-260nw-139484435.jpg",
      admissionDate: "12 Jan 2023",
      dischargeDate: "17 Jan 2023",
      progressText1: "12 Jan 09:10:57",
      progressText2: "15 Jan 03:47:25",
      progressText3: "17 Jan 03:47:25",
    },
    {
      userName: "Sahil Bisht",
      userRefNo: "67538902",
      amount: "Rs 20,000",
      IMG_SRC:
        "https://t3.ftcdn.net/jpg/00/66/05/46/360_F_66054627_i51cB54ORimc50SaZvWTWt49TTMnO12w.jpg",
      admissionDate: "14 JUN 2023",
      dischargeDate: "17 JUN 2023",
      progressText1: "12 JUN 07:20:16",
      progressText2: "14 JUN 08:27:05",
      progressText3: "18 JUN 09:04:07",
    },
    {
      userName: "Ankur",
      userRefNo: "67890458",
      amount: "Rs 40,000",
      IMG_SRC:
        "https://img.freepik.com/premium-photo/child-s-passport-photo-toddler-white-background-portrait-sad-child-looking-camera_236157-762.jpg",
      admissionDate: "15 AUG 2023",
      dischargeDate: "16 AUG 2023",
      progressText1: "17 AUG 05:15:27",
      progressText2: "19 AUG 08:12:56",
      progressText3: "20 AUG 10:02:45",
    },
    {
      userName: "Varun",
      userRefNo: "76340912",
      amount: "Rs 50,000",
      IMG_SRC:
        "https://thumbs.dreamstime.com/b/toddle-boyr-polo-shirt-poses-passport-portrait-young-handsome-boy-passport-portrait-159029244.jpg",
      admissionDate: "04 SEP 2023",
      dischargeDate: "07 SEP 2023",
      progressText1: "09 SEP 01:20:29",
      progressText2: "11 SEP 09:12:07",
      progressText3: "12 SEP 07:09:19",
    },
  ];
  return (
    <>
      {userData.map((user) => {
        return (
          <div className="card">
            <div className="header">
              <div className="header-left">
                <img src="https://companieslogo.com/img/orig/ICICIGI.NS-9be24ab1.png?t=1611144898" />
                <p className="company-name">ICICI LOMBARD</p>
              </div>
              <button className="btn-main">Pre Auth</button>
            </div>
            <div className="main-container">
              <div className="main-body">
                <div className="main-body-left">
                  <img className="userProfile" src={user.IMG_SRC} />
                  <div className="userInfo">
                    <p className="userName">{user.userName}</p>
                    <p className="sideText">{user.userRefNo}</p>
                  </div>
                </div>
                <div className="main-body-right">
                  <p className="amount text-light">Amount</p>
                  <p className="price">{user.amount}</p>
                </div>
              </div>
              <div className="user-main-info">
                <div className="admission-info">
                  <p className="text-light">Admission Date</p>
                  <p className="text-green">{user.admissionDate}</p>
                </div>
                <div className="discharge">
                  <p className="text-light">Discharge Date</p>
                  <p className="text-red">{user.dischargeDate}</p>
                </div>
                <div className="cta">
                  <span className="logo">
                    <ion-icon className="call-logo logo" name="call"></ion-icon>
                  </span>

                  <span className="logo">
                    <ion-icon name="refresh" className="logo"></ion-icon>
                  </span>
                  <span className="logo">
                    <ion-icon className="logo" name="ban"></ion-icon>
                  </span>
                </div>
              </div>
              <div className="progress">
                <p className="text-yellow step1">Pending</p>
                <p className="text-blue step2">On Recovery</p>
                <p className="text-green step3">Recovered</p>
                <p className="text-green step4"></p>
              </div>
              <div className="line">
                <div className="line1 " />
                <div className="line2" />
                <div className="line3" />
              </div>
              <div className="progress-text">
                <div className="text-light">{user.progressText1}</div>
                <div className="text-light">{user.progressText2}</div>
                <div className="text-light">{user.progressText3}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
