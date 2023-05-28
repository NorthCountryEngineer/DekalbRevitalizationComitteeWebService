import { Calendar } from "./Components";

export function Home() {
  return (
    <div>
        <img 
            src="/Images/Wallpaper.png"  
            alt="Wallpaper" 
            style={{ 
                width: '100%', 
                height: '100%', 
                position: 'fixed', 
                zIndex: '-1'
            }} 
            
        />

        <div style={{ height: '180px' }}></div>

        <div>
            <Calendar />
        </div>
    </div>
  );
}