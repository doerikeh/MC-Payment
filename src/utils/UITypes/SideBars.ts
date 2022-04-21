
export interface Routers {
    // [key: string]: Routers;
    path: string;
    name: string;
    icon?: string;
    layout?: string;
    component: React.ComponentType<any>;
}

export interface Logo {
    innerLink?: string;
    outerLink?: string;
    text: React.ReactNode;
    imgSrc: string;
}


export interface SideBar {
    // toggle: boolean;
    toggleSidebar?: () => void;
    onClick?: () => any;
    active?: boolean;
    name?:string;
    icon?: any;
    redirect?: string;
    Logo?: Logo;
    router?: Routers[];
}