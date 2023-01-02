import React, { FC, lazy, Suspense, useState, useTransition } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";

const Counter = lazy(() =>
  import("./components/common/Counter").then((value) => {
    return { default: value.Counter };
  })
);

const AdminComponent = lazy(() =>
  import("./components/common/AdminComponent").then((module) => {
    return {
      default: module.AdminComponent,
    };
  })
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="counter" element={<Counter />} />
        <Route path="about" element={<Admin />} />
        <Route path="*" element={<div>no page</div>} />
      </Route>
    </Routes>
  );
};

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPending, setTransition] = useTransition();

  return (
    <div>
      <button onClick={() => setTransition(() => setIsAdmin(!isAdmin))}>
        Set admin
      </button>
      {isPending && <h1>Pending..</h1>}
      {isAdmin ? <AdminComponent /> : <h3>Normal User</h3>}
    </div>
  );
};

const Main: FC = () => {
  return (
    <div>
      <div
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <Link to="/">Main</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/about">About</Link>
      </div>
      <Suspense fallback={<h1> Loading.. </h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
