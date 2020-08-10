import React, {useState} from 'react';
import classes from './Paginator.module.css'


const Paginator = ({totalUsersCount, usersPerPage, currentPage, onPageChange, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalUsersCount / usersPerPage)

  let array = []
  for (let i = 1; i <= pagesCount; i++) {
    array.push(i)
  }

  const [portion, setPortion] = useState(1)
  let leftBorder = (portion-1) * portionSize +1 ;
  let rightBorder = portion * portionSize;
  return (
      <div>
        {
          (portion >= 1) && <button onClick={() => setPortion(portion-1)}>Prev</button>
        }
        {array.filter(number => number >= leftBorder && number <= rightBorder).
        map(number => <span key={"key#" + number} className={number === currentPage ? classes.activePage : ""} onClick={(e) => onPageChange(number)}>{number} </span>)}
        {
          (portion < totalUsersCount / usersPerPage) && <button onClick={() => setPortion(portion+1)}>Next</button>
        }
      </div>
  )
}

export default Paginator
