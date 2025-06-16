"use client";

import { useState } from "react";
import { Badge, Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiMenu } from "react-icons/hi";

export function Component() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex  md:h-full">
      {/* Toggle Button for Small and Medium Screens */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 text-cyan-900 bg-gray-100 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-400"
        aria-label="Toggle sidebar"
      >
        <HiMenu className="h-5 w-5" />
      </button>

      {/* Sidebar Component */}
      <Sidebar
        aria-label="Sidebar with call to action button example"
        className={`fixed h-full md:relative md:translate-x-0 transition-transform duration-300 ${isOpen ? 'translate-x-0 z-40' : '-translate-x-full z-0'}`}
        style={{ top: 0, left: 0 }} // Ensure it aligns correctly
      >
        <button
          aria-label="Close"
          className="-m-1.5 ml-auto inline-flex h-6 w-6 md:hidden rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
          type="button"
          onClick={toggleSidebar}
        >
          <svg
            aria-hidden
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Kanban
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        {/* <Sidebar.CTA> */}
        {/*   Add your CTA content here if needed */}
        {/* </Sidebar.CTA> */}
      </Sidebar>
    </div>
  );
}








