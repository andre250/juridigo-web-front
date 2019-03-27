const SIDEBAR_CONTENT = {
    sections : [
        {
            name: "Home",
            path: "/home",
            subpath: []
        },
        {
            name: "Relatórios",
            path: "",
            subpath: [
                {
                    name: "Relatorio Geral"
                }
            ]
        },
        {
            name: "Configurações",
            path: "/configuracoes",
            subpath: []
        }
    ]
}

export default function sidebar(state = SIDEBAR_CONTENT, action){
    return state;
}