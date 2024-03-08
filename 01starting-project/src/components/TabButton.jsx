export default function TabButton({ children, isSelected, ...props }) {
  console.log("Tabbutton component executing");
  return (
    <li>
      <button 
       className={isSelected ? "active" : undefined}
       {...props} // onSelect ={()=>handleSelect('')}
       >
        {children}
      </button>
    </li>
  );
}
