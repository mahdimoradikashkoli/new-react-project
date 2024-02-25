import { Navigation } from "../../components";
import {
  MessageNotification,
  TitleForNotifications,
} from "../../microComponents";

const Notification = () => {
  return (
    <>
      <div>
        <Navigation backAddress="/" subjectName="Notifucation" />
        <div className="bg-blue-700 py-1 px-2 w-fit rounded-2xl fixed top-4 right-3 ">
          2 New
        </div>
      </div>
      <div className="px-3 pt-16 flex flex-col gap-3 pb-5">
        <TitleForNotifications day="TODAY" className="" />
        <MessageNotification 
        descMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aut optio! Provident exercitationem obcaecati accusantium repellat suscipit neque quaerat pariatur?" 
        imageNotification="/icons/iconcertificate.png"
        receiveTime="1h"
        titleMesaage="Certificate Available"/>
        <MessageNotification 
        descMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aut optio! Provident exercitationem obcaecati accusantium repellat suscipit neque quaerat pariatur?" 
        imageNotification="/icons/iconcertificate.png"
        receiveTime="1h"
        titleMesaage="New Course Arrival!"/>
        <MessageNotification 
        descMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aut optio! Provident exercitationem obcaecati accusantium repellat suscipit neque quaerat pariatur?" 
        imageNotification="/icons/iconcertificate.png"
        receiveTime="1h"
        titleMesaage="Course Reveiw Request"/>
        <TitleForNotifications day="YESTERDAY" className="" />
        <MessageNotification 
        descMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aut optio! Provident exercitationem obcaecati accusantium repellat suscipit neque quaerat pariatur?" 
        imageNotification="/icons/iconcertificate.png"
        receiveTime="1d"
        titleMesaage="Lesson 3 Unlocked"/>
        <MessageNotification 
        descMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aut optio! Provident exercitationem obcaecati accusantium repellat suscipit neque quaerat pariatur?" 
        imageNotification="/icons/iconcertificate.png"
        receiveTime="1d"
        titleMesaage="New Paypal Added"/>
        <MessageNotification 
        descMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aut optio! Provident exercitationem obcaecati accusantium repellat suscipit neque quaerat pariatur?" 
        imageNotification="/icons/iconcertificate.png"
        receiveTime="1d"
        titleMesaage="Certificate Available"/>
        <MessageNotification 
        descMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aut optio! Provident exercitationem obcaecati accusantium repellat suscipit neque quaerat pariatur?" 
        imageNotification="/icons/iconcertificate.png"
        receiveTime="1d"
        titleMesaage="Certificate Available"/>
      </div>
    </>
  );
};
export default Notification;
