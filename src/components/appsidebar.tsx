import React, { useContext, useEffect, useState } from 'react';
import { LibraryContext } from '@app/layout/context/librarycontext';
import { Link, useParams } from 'react-router-dom';
import { getDotscribePhraseGroups, getUserPhraseGroups } from '@server/graphql';
import { phraseGroups } from '@app/types';
import { mapLibs } from '@server/functions/functions';
import { ProgressSpinner } from 'primereact/progressspinner';
import LibraryTree from './libraryTree';

const AppSidebar = () => {
  const { updateSelectedNode } = useContext(LibraryContext);
  const { setOrgId } = useContext(LibraryContext);
  const [userLibrary, setUserLibrary] = useState<phraseGroups[]>(null);
  const [dotscribeLibrary, setdotscribeLibrary] =
    useState<phraseGroups[]>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserPhraseGroups();
        setUserLibrary(user);
        const dotscribe = await getDotscribePhraseGroups();
        setdotscribeLibrary(dotscribe);
        const id = await mapLibs(user);
        const userId = id.length > 0 ? id[0].key : null;
        setOrgId(userId);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <ProgressSpinner
          style={{ width: '70px', height: '70px' }}
          strokeWidth="4"
          animationDuration=".5s"
        />
      </div>
    );
  }
  const MenuItem = ({
    label,
    icon,
    children,
    bg,
    endpoint,
  }: {
    label: string;
    icon: string;
    children?: unknown;
    bg?: string;
    endpoint?: string;
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { libraryId } = useParams<{ libraryId?: string }>();
    const handleClick = () => {
      setIsOpen(endpoint === libraryId && !isOpen);
    };
    useEffect(() => {
      setIsOpen(endpoint === libraryId);
    }, [endpoint]);

    return (
      <li>
        <div
          onClick={handleClick}
          className="grid justify-content-between align-items-center p-2 cursor-pointer border-round-3xl hover:bg-white-alpha-90"
        >
          <div className="col-2">
            <img
              src={icon}
              alt="logo"
              className="shadow-1 border-round-xl mt-2"
              style={{
                marginRight: '1em',
                backgroundColor: `${bg}`,
                width: '1.7em',
                padding: '3px',
              }}
            />
          </div>
          <div className="col-10 ">
            <p className={`${isOpen ? 'text-900' : 'text-500'}`}>{label}</p>
          </div>
          {/* 
          {children && (
            <i
              className={`pi ${isOpen ? 'pi-angle-up' : 'pi-angle-down'}`}
              style={{ fontSize: '.75rem' }}
            ></i>
          )} */}
        </div>
        {isOpen && children}
      </li>
    );
  };

  return (
    <div className="">
      <div className="flex justify-content-start mb-5 mt-2">
        <img
          src={'/src/assets/images/logo.png'}
          alt="logo"
          className="w-12rem"
        />
      </div>
      <ul className="list-none p-0 m-0">
        <Link to={`/library/user`} className="link">
          <MenuItem
            label="My Library"
            icon="/src/assets/images/home.svg"
            bg="white"
            endpoint="user"
          >
            <LibraryTree
              libraries={userLibrary}
              setSelectedNode={updateSelectedNode}
              libType="user"
              customProp="user"
            />
          </MenuItem>
        </Link>
        <Link to={`/library/dotScribe`} className="link">
          <MenuItem
            label="DotScribe Library"
            icon="/src/assets/images/analysis.svg"
            bg="white"
            endpoint="dotScribe"
          >
            <LibraryTree
              libraries={dotscribeLibrary}
              setSelectedNode={updateSelectedNode}
              libType="dotscribe"
              customProp="dotScribe"
            />
          </MenuItem>
        </Link>
        <MenuItem
          label="Shared with Me"
          icon="/src/assets/images/wallet.svg"
          bg="white"
          endpoint="share"
        ></MenuItem>
        <MenuItem
          label="Community Phrases"
          icon="/src/assets/images/phrases.svg"
          bg="#21a1a1"
          endpoint="community"
        ></MenuItem>
        <Link to={`/dashboard`} className="link">
          <MenuItem
            label="My Analytics"
            icon="/src/assets/images/analysis.svg"
            bg="white"
            endpoint="dashboard"
          ></MenuItem>
        </Link>
        <MenuItem
          label="Help Center & Legal Info"
          icon="/src/assets/images/person.svg"
          endpoint="/help-center"
        >
          <ul className="p-0 m-0 ml-3 list-none">
            <MenuItem label="Support" icon="pi-envelope" endpoint="" />
            <MenuItem
              label="Terms & Conditions"
              icon="pi-file-pdf"
              endpoint=""
            />
          </ul>
        </MenuItem>
        <Link to={`/newTag`} className="link">
          <MenuItem
            label="New tags"
            icon="/src/assets/images/analysis.svg"
            bg="white"
            endpoint="newTag"
          ></MenuItem>
        </Link>
        <Link to={`/allTags`} className="link">
          <MenuItem
            label="All tags"
            icon="/src/assets/images/analysis.svg"
            bg="white"
            endpoint="allTags"
          ></MenuItem>
        </Link>
        <Link to={`/forgetPassword`} className="link">
          <MenuItem
            label="Forget password"
            icon="/src/assets/images/analysis.svg"
            bg="white"
            endpoint="forgetPassword"
          ></MenuItem>
        </Link>
        <Link to={`/userRoles`} className="link">
          <MenuItem
            label="User Roles"
            icon="/src/assets/images/analysis.svg"
            bg="white"
            endpoint="userRoles"
          ></MenuItem>
        </Link>
        <Link to={`/notifications`} className="link">
          <MenuItem
            label="Notifications"
            icon="/src/assets/images/analysis.svg"
            bg="white"
            endpoint="notifications"
          ></MenuItem>
        </Link>
        <Link to={`/onBoard`} className="link">
          <MenuItem
            label="On Board"
            icon="/src/assets/images/analysis.svg"
            bg="white"
            endpoint="onBoard"
          ></MenuItem>
        </Link>
        <Link to={`/resetPassword`} className="link">
          <MenuItem
            label="Reset Passwords"
            icon="/src/assets/images/analysis.svg"
            bg="white"
            endpoint="resetPassword"
          ></MenuItem>
        </Link>
        <Link to={`/setting`} className="link">
          <MenuItem
            label="Settings"
            icon="/src/assets/images/analysis.svg"
            bg="white"
            endpoint="setting"
          ></MenuItem>
        </Link>
        <Link to={`/dashboard`} className="link">
          <MenuItem
            label="dashboard"
            icon="/src/assets/images/analysis.svg"
            bg="white"
            endpoint="dashboard"
          ></MenuItem>
        </Link>
        <Link to={`/table`} className="link">
          <MenuItem
            label="table"
            icon="/src/assets/images/analysis.svg"
            bg="white"
            endpoint="table"
          ></MenuItem>
        </Link>
      </ul>
      <div className="helpBox p-2 ">
        <div className="ml-2">
          <img
            src={`/src/assets/images/help-question.svg`}
            alt="logo"
            className=""
          />
        </div>
        <div className="pl-2">
          <p className="m-0 text-white-alpha-90 font-medium mt-3 ">
            Need Help?
          </p>
          <p className="text-white-alpha-90">Please check our docs</p>
        </div>
        <div className="flex justify-content-center mt-3">
          <img src={`/src/assets/images/doc-btn.svg`} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;
