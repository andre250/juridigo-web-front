const SIDEBAR_CONTENT = {
    userPhoto: "http://twixar.me/dsGK",
    jobPhoto: "http://twixar.me/hsGK",
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