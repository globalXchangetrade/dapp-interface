import React from 'react'

const ThreeDots:React.FC = () => {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd"></path>
    </svg>
  )
}

const DownArrow:React.FC = () => {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L9.70711 1.70711ZM5 5L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L5 5ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM8.29289 0.292893L4.29289 4.29289L5.70711 5.70711L9.70711 1.70711L8.29289 0.292893ZM5.70711 4.29289L1.70711 0.292893L0.292893 1.70711L4.29289 5.70711L5.70711 4.29289Z" fill="white"/>
    </svg>
  )
}

const Search:React.FC = () => {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
    </svg>
  )
}

const Filter:React.FC = () => {
  return (
    <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.76995 10.7862H10.278V9.03221H6.76995V10.7862ZM0.630859 0.262085V2.01611H16.4171V0.262085H0.630859ZM3.2619 6.40117H13.786V4.64715H3.2619V6.40117Z" fill="white"/>
    </svg>
  )
}

const Clock:React.FC = () => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6641 19.1788C15.0133 19.1788 18.5391 15.6531 18.5391 11.3038C18.5391 6.95459 15.0133 3.42883 10.6641 3.42883C6.31482 3.42883 2.78906 6.95459 2.78906 11.3038C2.78906 15.6531 6.31482 19.1788 10.6641 19.1788Z" stroke="url(#paint0_linear_104_254)" strokeWidth="1.61538" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.6641 6.92883V11.3038H15.0391" stroke="url(#paint1_linear_104_254)" strokeWidth="1.07692" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
      <linearGradient id="paint0_linear_104_254" x1="18.5391" y1="4.47883" x2="1.68946" y2="5.17914" gradientUnits="userSpaceOnUse">
      <stop stopColor="#82BCEF"/>
      <stop offset="1" stopColor="#1780E0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_104_254" x1="15.0391" y1="7.2205" x2="10.3586" y2="7.41503" gradientUnits="userSpaceOnUse">
      <stop stopColor="#82BCEF"/>
      <stop offset="1" stopColor="#1780E0"/>
      </linearGradient>
      </defs>
    </svg>
  )
}

const Eye:React.FC = () => {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.1646 0.553833C10.3099 0.553833 12.9268 2.81717 13.4757 5.80383C12.9273 8.7905 10.3099 11.0538 7.1646 11.0538C4.01927 11.0538 1.40243 8.7905 0.853516 5.80383C1.40185 2.81717 4.01927 0.553833 7.1646 0.553833ZM7.1646 9.88717C8.35429 9.88691 9.50866 9.48281 10.4388 8.74101C11.3689 7.99922 12.0196 6.96366 12.2845 5.80383C12.0187 4.64493 11.3675 3.6105 10.4375 2.86968C9.50745 2.12886 8.35361 1.72547 7.1646 1.72547C5.97559 1.72547 4.82175 2.12886 3.89173 2.86968C2.96172 3.6105 2.31055 4.64493 2.04468 5.80383C2.30957 6.96366 2.96033 7.99922 3.89043 8.74101C4.82054 9.48281 5.97491 9.88691 7.1646 9.88717V9.88717ZM7.1646 8.42883C6.46841 8.42883 5.80073 8.15227 5.30844 7.65999C4.81616 7.1677 4.5396 6.50003 4.5396 5.80383C4.5396 5.10764 4.81616 4.43996 5.30844 3.94768C5.80073 3.45539 6.46841 3.17883 7.1646 3.17883C7.86079 3.17883 8.52847 3.45539 9.02075 3.94768C9.51304 4.43996 9.7896 5.10764 9.7896 5.80383C9.7896 6.50003 9.51304 7.1677 9.02075 7.65999C8.52847 8.15227 7.86079 8.42883 7.1646 8.42883ZM7.1646 7.26217C7.55137 7.26217 7.9223 7.10852 8.1958 6.83503C8.46929 6.56154 8.62293 6.19061 8.62293 5.80383C8.62293 5.41706 8.46929 5.04613 8.1958 4.77264C7.9223 4.49914 7.55137 4.3455 7.1646 4.3455C6.77782 4.3455 6.40689 4.49914 6.1334 4.77264C5.85991 5.04613 5.70627 5.41706 5.70627 5.80383C5.70627 6.19061 5.85991 6.56154 6.1334 6.83503C6.40689 7.10852 6.77782 7.26217 7.1646 7.26217Z" fill="white"/>
    </svg>
  )
}

const Close:React.FC<any> = ({ onClick } :any) => {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path d="M9.62498 9.62498L1.375 1.375" stroke="white" strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.62502 1.375L1.375 9.62502" stroke="white" strokeWidth="0.916667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const Calendar:React.FC = () => {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.11981 1.2632H10.2251C10.3647 1.2632 10.4985 1.31865 10.5972 1.41735C10.6959 1.51606 10.7514 1.64993 10.7514 1.78951V10.2105C10.7514 10.3501 10.6959 10.484 10.5972 10.5827C10.4985 10.6814 10.3647 10.7369 10.2251 10.7369H0.751412C0.611825 10.7369 0.477955 10.6814 0.379252 10.5827C0.280548 10.484 0.225098 10.3501 0.225098 10.2105V1.78951C0.225098 1.64993 0.280548 1.51606 0.379252 1.41735C0.477955 1.31865 0.611825 1.2632 0.751412 1.2632H2.85667V0.210571H3.9093V1.2632H7.06718V0.210571H8.11981V1.2632ZM7.06718 2.31583H3.9093V3.36846H2.85667V2.31583H1.27773V4.42109H9.69875V2.31583H8.11981V3.36846H7.06718V2.31583ZM9.69875 5.47371H1.27773V9.68423H9.69875V5.47371Z" fill="white"/>
    </svg>
  )
}

const List:React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill='#2F3CED'
      className="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      ></path>
    </svg>
  )
}

export {
  ThreeDots,
  DownArrow,
  Search,
  Filter,
  Clock,
  Eye,
  Close,
  Calendar,
  List
}
