import { Link } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { RiUserAddLine } from "react-icons/ri";
import { useContext, useEffect } from "react";
import UserContext from "../../Hooks/UserContext";
import axios from "../../config/api/axios";

const Dash = () => {
  const { user, setPaperList } = useContext(UserContext);

  useEffect(() => {
    const getPapers = async () => {
      const response = await axios.get(`paper/teacher/${user.teacher._id}`);
      setPaperList(response.data);
    };
    getPapers();
    
  }, [setPaperList, user]);

  return (
    <main className="self-center">
      <h2 className="m-6 mx-auto text-center text-6xl font-bold dark:text-slate-400">
       {user.userType} Dashboard
      </h2>

      { user && user.userType === 'Teacher' && (
        
        <div className="grid grid-cols-1 place-content-center gap-3 px-1 py-4 lg:grid-cols-2 lg:gap-4 lg:px-8 xl:grid-cols-3">
          <Link
            className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
            to={"./student"}
          >
            <GiBookshelf className="text-[2.5rem] lg:text-[4rem] " />
            <div className="font-semibold">
              Create Student
              <p className="text-sm font-normal lg:text-base ">
                Creating students
              </p>
            </div>
          </Link>

          <Link
            className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
            to={"./assign"}
          >
            <IoCalendarOutline className="text-[2.5rem] lg:text-[4rem] " />
            <div className="font-semibold">
               Assigning Subjects
              <p className="text-sm font-normal lg:text-base ">
                Add or Edit Subjects
              </p>
            </div>
          </Link>
   
          {/* <Link
            className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
            to={"./getIndAttandance"}
          >
            <IoCalendarOutline className="text-[2.5rem] lg:text-[4rem] " />
            <div className="font-semibold">
                 Get Attandance
              <p className="text-sm font-normal lg:text-base ">
                  get attandance of individual student
              </p>
            </div>
          </Link>
           */}
          <Link
            className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
            to={"./getAttandance"}
          >
            <IoCalendarOutline className="text-[2.5rem] lg:text-[4rem] " />
            <div className="font-semibold">
                 Get Attandance
              <p className="text-sm font-normal lg:text-base ">
                  get attandance particular date
              </p>
            </div>
          </Link>

          <Link
            className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
            to={"./addAttendance"}
          >
            <IoCalendarOutline className="text-[2.5rem] lg:text-[4rem] " />
            <div className="font-semibold">
               Create Attendance
              <p className="text-sm font-normal lg:text-base ">
                Add or Edit Attendance
              </p>
            </div>
          </Link>

          <Link
            className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
            to={"./internal"}
          >
            <HiOutlineDocumentReport className="text-[2.5rem] lg:text-[4rem] " />
            <div className="font-semibold">
              Create Internal Mark
              <p className="text-sm font-normal lg:text-base ">
                View or Edit Internal Marks
              </p>
            </div>
          </Link>

          {/* <Link
            className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
            to={"./time_schedule"}
          >
            <AiOutlineSchedule className="text-[2.5rem] lg:text-[4rem] " />
            <div className="font-semibold">
              Time Schedule
              <p className="text-sm font-normal lg:text-base ">
                View or Edit Time Schedule
              </p>
            </div>
          </Link> */}
        </div>
      )}
      
      {user && user.userType === "HOD" && (
        <div>
           <Link
            className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
            to={"./addsubjects"}
          >
            <BiBookAdd className="text-[2.5rem] lg:text-[4rem] " />
            <div className="font-semibold">
              Add Subjects
              <p className="text-sm font-normal lg:text-base ">
                add, edit, delete and get all subjects
              </p>
            </div>
          </Link>

          <Link
            className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
            to={"./approveteacher"}
          >
            <RiUserAddLine className="text-[2.5rem] lg:text-[4rem] " />
            <div className="font-semibold">
              Approve Teacher
              <p className="text-sm font-normal lg:text-base ">
                Approve registered teacher(s)
              </p>
            </div>
          </Link>
          <Link
            className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
            to={"./getsubjects"}
          >
            <RiUserAddLine className="text-[2.5rem] lg:text-[4rem] " />
            <div className="font-semibold">
              Get All Subjects
              <p className="text-sm font-normal lg:text-base ">
                Get all Subjects and Edit, Delete
              </p>
            </div>
          </Link>

        </div>
      )}
      
      <Link
        className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
        to={"./profile"}
      >
      
        <div className="font-semibold">
          Profile
          <p className="text-sm font-normal lg:text-base ">
            View or Edit Profile
          </p>
        </div>
      </Link>
    </main>
  );
};

export default Dash;
