import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
    layout("./routes/layout.tsx", [
        layout("./routes/home/meta.layout.tsx", [
            index("routes/home/index.tsx")
        ])
    ])
] satisfies RouteConfig;