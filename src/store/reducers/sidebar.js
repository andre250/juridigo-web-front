import home from '../../assets/home.png';
import writing from '../../assets/writing.png';
import setting from '../../assets/settings-gears.png';

const SIDEBAR_CONTENT = {
    sections : [
        {
            name: "Home",
            path: "/home",
            icon: home,
            subpath: []
        },
        {
            name: "Relatórios",
            path: "/relatorios",
            icon: writing,
            subpath: []
        },
        {
            name: "Configurações",
            path: "/configuracoes",
            icon: setting,
            subpath: []
        }
    ]
}

export default function sidebar(state = SIDEBAR_CONTENT, action){
    return state;
}