const stats = [
  {
    title: "Registered Lands",
    value: "12",
    description: "+2 this month",
  },
  {
    title: "Active Crops",
    value: "18",
    description: "Across 12 lands",
  },
  {
    title: "Pending Approvals",
    value: "3",
    description: "Requires attention",
  },
  {
    title: "Upcoming Harvests",
    value: "5",
    description: "Next 30 days",
  },
];

const alerts = [
  {
    title: "Planting Reminder",
    description: "Paddy planting is scheduled for tomorrow.",
    type: "Planting",
  },
  {
    title: "Fertilizer Reminder",
    description: "Fertilizer application is due in 3 days.",
    type: "Maintenance",
  },
  {
    title: "Crop Inspection",
    description: "Upload a new crop growth photo.",
    type: "Monitoring",
  },
];

const activities = [
  {
    title: "New land registered",
    description: "Land L-001 has been registered successfully.",
    time: "2 hours ago",
  },
  {
    title: "Cultivation plan submitted",
    description: "Paddy cultivation plan is awaiting approval.",
    time: "5 hours ago",
  },
  {
    title: "Crop photo uploaded",
    description: "New growth image uploaded for Land L-004.",
    time: "Yesterday",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">🌱</div>

          <div>
            <h2>AgriManage</h2>
            <p>Crop & Land</p>
          </div>
        </div>

        <nav className="navigation">

          <a href="#" className="nav-item active">
            <span>⌂</span>
            Dashboard
          </a>

          <a href="#" className="nav-item">
            <span>👨‍🌾</span>
            Farmers
          </a>

          <a href="#" className="nav-item">
            <span>📍</span>
            Lands
          </a>

          <a href="#" className="nav-item">
            <span>🌾</span>
            Crops
          </a>

          <a href="#" className="nav-item">
            <span>📋</span>
            Cultivation
          </a>

          <a href="#" className="nav-item">
            <span>📷</span>
            Monitoring
          </a>

          <a href="#" className="nav-item">
            <span>✓</span>
            Approvals
          </a>

          <a href="#" className="nav-item">
            <span>🎓</span>
            Training
          </a>

          <a href="#" className="nav-item">
            <span>💳</span>
            Payments
          </a>

          <a href="#" className="nav-item">
            <span>📊</span>
            Reports
          </a>

        </nav>

        <div className="sidebar-footer">
          <div className="user-avatar">
            K
          </div>

          <div>
            <strong>Kishalan</strong>
            <p>Farmer / Land Owner</p>
          </div>
        </div>
      </aside>


      {/* Main */}
      <main className="main">

        {/* Header */}
        <header className="header">

          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, Kishalan</p>
          </div>

          <div className="header-actions">

            <button className="notification-button">
              🔔
              <span></span>
            </button>

            <div className="profile">
              <div className="profile-avatar">
                K
              </div>

              <div>
                <strong>Kishalan</strong>
                <small>244106D</small>
              </div>
            </div>

          </div>

        </header>


        {/* Statistics */}
        <section className="stats-grid">

          {stats.map((stat) => (
            <div className="stat-card" key={stat.title}>

              <div className="stat-top">
                <p>{stat.title}</p>

                <div className="stat-icon">
                  🌱
                </div>
              </div>

              <h2>{stat.value}</h2>

              <span>
                {stat.description}
              </span>

            </div>
          ))}

        </section>


        {/* Main Grid */}
        <section className="content-grid">

          {/* Crop Growth */}
          <div className="card growth-card">

            <div className="card-header">

              <div>
                <h2>Crop Growth</h2>
                <p>Overall crop growth monitoring</p>
              </div>

              <select>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>This year</option>
              </select>

            </div>

            <div className="chart">

              <div className="chart-y">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>

              <div className="chart-area">

                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <div className="line line-4"></div>
                <div className="line line-5"></div>

                <div className="growth-line">
                  <span className="point p1"></span>
                  <span className="point p2"></span>
                  <span className="point p3"></span>
                  <span className="point p4"></span>
                  <span className="point p5"></span>
                  <span className="point p6"></span>
                </div>

              </div>

            </div>

            <div className="chart-labels">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
              <span>Week 5</span>
              <span>Week 6</span>
            </div>

          </div>


          {/* Alerts */}
          <div className="card">

            <div className="card-header">
              <div>
                <h2>Upcoming Alerts</h2>
                <p>Important farming activities</p>
              </div>

              <button className="view-button">
                View all
              </button>
            </div>

            <div className="alerts">

              {alerts.map((alert) => (

                <div className="alert" key={alert.title}>

                  <div className="alert-icon">
                    🌱
                  </div>

                  <div className="alert-content">
                    <strong>{alert.title}</strong>
                    <p>{alert.description}</p>
                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* Bottom Section */}
        <section className="bottom-grid">

          {/* Recent Activity */}
          <div className="card">

            <div className="card-header">

              <div>
                <h2>Recent Activity</h2>
                <p>Latest system activities</p>
              </div>

              <button className="view-button">
                View all
              </button>

            </div>

            <div className="activities">

              {activities.map((activity) => (

                <div
                  className="activity"
                  key={activity.title}
                >

                  <div className="activity-dot"></div>

                  <div className="activity-content">
                    <strong>{activity.title}</strong>

                    <p>
                      {activity.description}
                    </p>

                    <small>
                      {activity.time}
                    </small>
                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* Land Overview */}
          <div className="card land-overview">

            <div className="card-header">

              <div>
                <h2>Land Overview</h2>
                <p>Registered land distribution</p>
              </div>

            </div>

            <div className="land-chart">

              <div className="donut">
                <div>
                  <strong>12</strong>
                  <span>Lands</span>
                </div>
              </div>

              <div className="land-legend">

                <div>
                  <span className="legend-dot"></span>
                  Paddy
                  <strong>5</strong>
                </div>

                <div>
                  <span className="legend-dot"></span>
                  Vegetables
                  <strong>4</strong>
                </div>

                <div>
                  <span className="legend-dot"></span>
                  Other
                  <strong>3</strong>
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}