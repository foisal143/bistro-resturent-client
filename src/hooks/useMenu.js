import { useEffect, useState } from 'react';

const useMenu = () => {
  const [menus, setMenus] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      const loadded = await fetch('menu.json');
      const datas = await loadded.json();
      setMenus(datas);
      setLoader(false);
    };
    loadData();
  }, []);
  return [menus, loader];
};

export default useMenu;
