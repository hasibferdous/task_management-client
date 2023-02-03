import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FiArchive,
  FiArrowRight,
  FiBook,
  FiCheckSquare,
  FiClock,
  FiCopy,
  FiPaperclip,
  FiShare2,
  FiTag,
  FiUser,
} from "react-icons/fi";
import { TbTemplate } from "react-icons/tb";
import MembersDropDown from "../SingleTaskModalDropDown/MembersDropDown";
import ChecklistDropDown from "../SingleTaskModalDropDown/ChecklistDropDown";
import DateDropDown from "../SingleTaskModalDropDown/DateDropDown";
import MoveDropDown from "../SingleTaskModalDropDown/MoveDropDown";
import CopyDropDown from "../SingleTaskModalDropDown/CopyDropDown";
import { AuthContext } from "../../../Context/UserContext";
import CheckList from "../../CheckList/CheckList";

const SingleTaskModal = () => {
  const buttonStyle =
    "dropdown dropdown-left flex items-center p-2 space-x-3 rounded-md btn-ghost bg-gray-800 btn-sm text-gray-400";
  const { currentWorkspace, currentTask, setCurrentTask } =
    useContext(AuthContext);
  return (
    <div>
      <div id="new-board-modal" className="modal">
        <div className="modal-box rounded-md bg-gray-50 max-w-screen-md mx-2">
          <a href="#" className="btn btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </a>

          <div className="grid grid-cols-4 -mr-4">
            <div className="px-6 dark:text-gray-500 col-span-4 md:col-span-3">
              <form className="grid grid-cols-1 gap-3 mt-10">
                {/* ------------title input section---------- */}
                <input
                  name="name"
                  type="text"
                  // placeholder="Untitled"
                  defaultValue={currentTask?.note}
                  className="input input-bordered w-full rounded-sm text-3xl font-semibold"
                  required
                />

                {/* ------------Text Area section------------- */}

                <textarea
                  id="bio"
                  placeholder=""
                  className="input input-bordered p-4 w-full rounded-sm outline-border h-24"
                ></textarea>
                <div className="mt-4">
                  <button
                    onClick={""}
                    type="submit"
                    className="btn btn-ghost btn-sm rounded-md bg-gray-800 text-gray-400"
                  >
                    Save
                  </button>
                  <button
                    onClick={""}
                    type="submit"
                    className="btn btn-ghost btn-sm font-normal bg-gray-200 rounded-md text-gray-400 ml-3"
                  >
                    Cancel
                  </button>
                </div>
              </form>
              <br />

              {/*---Task Checklist Section [need Some Processing for dynamic]--- */}
              <CheckList />
              {/*-------------comments/Activity section----------- */}

              <div className="text-gray-600 mt-8">
                <div className="flex justify-between ">
                  <h3 className="text-md font-semibold">Activity</h3>

                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="flex btn-ghost btn-sm text-gray-600  items-center p-2 space-x-3 rounded-sm shadow-sm"
                  >
                    <p>Show Details</p>
                  </Link>
                </div>
                <div>
                  {/* -----------Comment text area---------- */}

                  <form className="flex flex-col py-6 space-y-4 md:py-0 ng-untouched ng-pristine ng-valid">
                    <label className="block">
                      <textarea
                        id="bio"
                        placeholder="Write a comment..."
                        className="input input-bordered p-2 mt-2 w-full rounded-sm outline-border"
                      ></textarea>
                    </label>
                    <div className="flex flex-wrap">
                      {/* ----- comment submit button------ */}
                      <button
                        onClick={""}
                        type="submit"
                        className="btn btn-ghost btn-sm rounded-md bg-gray-800 text-gray-400"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* ============== Sidebar Area ============= */}

            <div className="col-span-1">
              <div className="h-full space-y-2 w-full  dark:text-gray-700">
                {/* <div className="md:flex items-center space-x-4"></div> */}
                <div className="divide-y divide-gray-700">
                  <ul className="pt-2 pb-4 space-y-1 text-sm text-grey">
                    {/* ------ Suggested section----- */}

                    <p className="text-grey mt-6">Suggested</p>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className="flex items-center p-2 space-x-3 rounded-sm btn-ghost btn-sm"
                      >
                        <FiUser></FiUser>
                        <span>Join</span>
                      </Link>
                    </li>
                    <p className="pt-6">Add to card</p>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        tabIndex={0}
                        className={buttonStyle}
                      >
                        <FiUser></FiUser>
                        <span className="text-grey">Members</span>
                        <MembersDropDown></MembersDropDown>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className={buttonStyle}
                      >
                        <FiTag></FiTag>
                        <span>Labels</span>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        tabIndex={0}
                        className={buttonStyle}
                      >
                        <FiCheckSquare></FiCheckSquare>
                        <span>Checklist</span>
                        <ChecklistDropDown></ChecklistDropDown>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        tabIndex={0}
                        className={buttonStyle}
                      >
                        <FiClock></FiClock>
                        <span>Dates</span>
                        <DateDropDown></DateDropDown>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className={buttonStyle}
                      >
                        <FiPaperclip></FiPaperclip>
                        <span>Attachment</span>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className={buttonStyle}
                      >
                        <FiBook></FiBook>
                        <span>Cover</span>
                      </Link>
                    </li>

                    {/*----------- Action Section ----------- */}

                    <p className="text-grey pt-6">Actions</p>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        tabIndex={0}
                        className={buttonStyle}
                      >
                        <FiArrowRight></FiArrowRight>
                        <span>Move</span>
                        <MoveDropDown></MoveDropDown>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        tabIndex={0}
                        className={buttonStyle}
                      >
                        <FiCopy></FiCopy>
                        <span>Copy</span>
                        <CopyDropDown></CopyDropDown>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className={buttonStyle}
                      >
                        <TbTemplate></TbTemplate>
                        <span>Make Template</span>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className={buttonStyle}
                      >
                        <FiArchive></FiArchive>
                        <span>Archive</span>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        rel="noopener noreferrer"
                        href="#"
                        className={buttonStyle}
                      >
                        <FiShare2></FiShare2>
                        <span>Share</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTaskModal;
