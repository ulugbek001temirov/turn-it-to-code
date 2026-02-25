import { Bell, Send, ArrowDownLeft, RefreshCw, MoreHorizontal, Home, Wallet, BarChart3, Settings, Play, DollarSign, Flower2 } from "lucide-react";

const cards = [
  {
    balance: "4,863.27",
    creditLimit: "10,000",
    ownMoney: "4,863.27",
    lastFour: "8734",
    gradient: "from-[hsl(230,70%,50%)] to-[hsl(260,60%,45%)]",
    isMastercard: true,
  },
  {
    balance: "2,156.80",
    creditLimit: "5,000",
    ownMoney: "2,156.80",
    lastFour: "4521",
    gradient: "from-[hsl(340,70%,50%)] to-[hsl(20,80%,50%)]",
    isMastercard: false,
  },
];

const payments = [
  { icon: Send, label: "Send" },
  { icon: ArrowDownLeft, label: "Request" },
  { icon: RefreshCw, label: "Change" },
  { icon: MoreHorizontal, label: "Another" },
];

const transactions = [
  {
    group: "Today",
    items: [
      { icon: Play, name: "YouTube Premium", amount: -11.99, color: "bg-red-500/20 text-red-400" },
      { icon: DollarSign, name: "PayPal from Alex", amount: 850, color: "bg-blue-500/20 text-blue-400" },
    ],
  },
  {
    group: "Yesterday",
    items: [
      { icon: Flower2, name: "Flower store", amount: -1350, color: "bg-pink-500/20 text-pink-400" },
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {/* Phone frame for desktop */}
      <div className="w-full max-w-[430px] min-h-screen md:min-h-0 md:h-[932px] md:rounded-[2.5rem] md:border md:border-border md:shadow-2xl md:shadow-black/50 md:my-8 relative overflow-hidden flex flex-col bg-background">
        
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto pb-24 px-5 pt-6">
          
          {/* Header */}
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground">
                M
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Welcome back</p>
                <h1 className="text-lg font-semibold text-foreground">Hi, Michael 👋</h1>
              </div>
            </div>
            <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Bell size={18} className="text-muted-foreground" />
            </button>
          </header>

          {/* My Cards */}
          <section className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-semibold text-foreground">My Cards</h2>
              <button className="text-sm text-primary">All cards</button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 snap-x snap-mandatory scrollbar-hide">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className={`min-w-[280px] rounded-2xl bg-gradient-to-br ${card.gradient} p-5 snap-center flex flex-col justify-between h-[170px]`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-white/60">Current Balance</p>
                      <p className="text-2xl font-bold text-white">${card.balance}</p>
                    </div>
                    {card.isMastercard && (
                      <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full bg-red-500 opacity-80" />
                        <div className="w-7 h-7 rounded-full bg-yellow-500 opacity-80" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex gap-4">
                      <div>
                        <p className="text-[10px] text-white/50">Credit Limit</p>
                        <p className="text-xs font-medium text-white/80">${card.creditLimit}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-white/50">Own Money</p>
                        <p className="text-xs font-medium text-white/80">${card.ownMoney}</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/60 tracking-widest">•••• {card.lastFour}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Payments */}
          <section className="mb-6">
            <h2 className="text-base font-semibold text-foreground mb-3">Payments</h2>
            <div className="grid grid-cols-4 gap-3">
              {payments.map(({ icon: Icon, label }) => (
                <button key={label} className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">{label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Transactions */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base font-semibold text-foreground">Recent Transactions</h2>
              <button className="text-sm text-primary">See All</button>
            </div>
            {transactions.map((group) => (
              <div key={group.group} className="mb-4">
                <p className="text-xs text-muted-foreground mb-2">{group.group}</p>
                <div className="flex flex-col gap-3">
                  {group.items.map((tx, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.color}`}>
                          <tx.icon size={18} />
                        </div>
                        <span className="text-sm font-medium text-foreground">{tx.name}</span>
                      </div>
                      <span className={`text-sm font-semibold ${tx.amount > 0 ? "text-success" : "text-expense"}`}>
                        {tx.amount > 0 ? "+" : "-"}${Math.abs(tx.amount).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* Bottom Nav */}
        <nav className="absolute bottom-0 left-0 right-0 bg-secondary/80 backdrop-blur-xl border-t border-border px-5 py-3">
          <div className="flex justify-around">
            {[
              { icon: Home, label: "Home", active: true },
              { icon: Wallet, label: "Wallet", active: false },
              { icon: BarChart3, label: "Statistic", active: false },
              { icon: Settings, label: "Settings", active: false },
            ].map(({ icon: Icon, label, active }) => (
              <button key={label} className="flex flex-col items-center gap-1">
                <Icon size={20} className={active ? "text-nav-active" : "text-muted-foreground"} />
                <span className={`text-[10px] ${active ? "text-nav-active font-medium" : "text-muted-foreground"}`}>
                  {label}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Index;
