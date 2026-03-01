import React from "react";
import Navbar from "./Navbar";
import AddExperience from "./AddExperience";
import Experience from "./Experience";
import PublicProfile from "./PublicProfile";
import ProfilePhoto from "./ProfilePhoto";

function Dashboard() {

  // ✅ Logged user
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // ✅ Protect dashboard
  if (!user) {
    window.location = "/";
  }

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== MAIN DASHBOARD ===== */}
      <div className="container-fluid">

        {/* HEADER SECTION */}
        <div className="bg-light p-4 shadow-sm">

          <div className="row align-items-center">

            {/* PROFILE IMAGE */}
            <div className="col-md-2 text-center">

              <img
 src={
  user.profilePhoto
   ? `http://localhost:8080/uploads/${user.profilePhoto}`
   : "https://via.placeholder.com/150"
 }
    alt="profile"
 className="rounded-circle"
 width="140"
 height="140"
/>

            </div>

            {/* USER DETAILS */}
            <div className="col-md-6">

              <h2 className="fw-bold">
                Welcome, {user.name} 👋
              </h2>

              <p className="text-muted">
                Manage your professional portfolio
              </p>

              {/* PUBLIC PROFILE BUTTON */}
              <a
                href={`/profile/${user.id}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View Public Portfolio
              </a>

            </div>

          </div>

        </div>

        {/* DASHBOARD CONTENT */}
        <div className="row p-4">

          {/* LEFT SIDE */}
          <div className="col-md-4">

            <div className="card shadow-lg border-0 mb-4">
              <div className="card-body">
                <ProfilePhoto />
              </div>
            </div>

            <div className="card shadow-lg border-0">
              <div className="card-body">
                <AddExperience />
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-8">

            <div className="card shadow-lg border-0">
              <div className="card-body">
                <Experience />
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;