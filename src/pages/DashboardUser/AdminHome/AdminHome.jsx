import { FaTruck, FaUsers, FaWallet } from 'react-icons/fa';
import useCounts from '../../../hooks/useCounts';
import { LuChefHat } from 'react-icons/lu';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useQuery } from '@tanstack/react-query';
import useAxiosWithAuth from '../../../hooks/axiosSciure';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthPorvaider/AuthProvaider';

const AdminHome = () => {
  const { loader } = useContext(AuthContext);
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  const [allCounts] = useCounts();
  const axiosSciure = useAxiosWithAuth();

  const { data = [] } = useQuery({
    queryKey: ['counts'],
    enabled: !loader,
    queryFn: async () => {
      const res = await axiosSciure.get('/menu-stage');
      return res.data;
    },
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = props => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // data for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="px-12 pt-12  w-full bg-white">
      <h3 className="text-3xl font-[Cinzen] font-semibold ">
        Hi, Welcome Back!
      </h3>
      <div className="grid my-10 grid-cols-1 md:grid-cols-4 gap-5">
        <div className="font-[Cinzen] bg-gradient-to-r to-[#FCDBFF] from-[#BB34F5] w-full text-white rounded-md h-[100px] flex justify-center items-center gap-3">
          <span className="text-2xl">
            <FaWallet />
          </span>
          <aside>
            <h3 className="text-xl font-bold">${allCounts.revinue}</h3>
            <p className="uppercase  font-semibold">Revinue</p>
          </aside>
        </div>
        <div className="font-[Cinzen] bg-gradient-to-r to-[#FDE8C0] from-[#D3A256] w-full text-white rounded-md h-[100px] flex justify-center items-center gap-3">
          <span className="text-2xl">
            <FaUsers />
          </span>
          <aside className="text-center">
            <h3 className="text-xl font-bold">{allCounts.userCount}</h3>
            <p className="uppercase font-semibold">Customers</p>
          </aside>
        </div>
        <div className="font-[Cinzen] bg-gradient-to-r to-[#FECDE9] from-[#FE4880] w-full text-white rounded-md h-[100px] flex justify-center items-center gap-3">
          <span className="text-2xl">{<LuChefHat />}</span>
          <aside>
            <h3 className="text-xl font-bold">{allCounts.menuCount}</h3>
            <p className="uppercase  font-semibold">Menu</p>
          </aside>
        </div>
        <div className="font-[Cinzen] bg-gradient-to-r to-[#B6F7FF] from-[#6AAEFF] w-full text-white rounded-md h-[100px] flex justify-center items-center gap-3">
          <span className="text-2xl">{<FaTruck />}</span>
          <aside>
            <h3 className="text-xl font-bold">{allCounts.orderCount}</h3>
            <p className="uppercase  font-semibold">Order</p>
          </aside>
        </div>
      </div>

      <div className="my-5 grid bg-white grid-cols-1 md:grid-cols-2 ">
        <div className="w-full flex justify-center items-center h-[460px] ">
          <div>
            <BarChart
              width={400}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="price"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: 'top' }}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>

        <div className="w-full flex justify-end items-center h-[460px] ">
          <ResponsiveContainer
            className="flex justify-center items-center"
            width="100%"
            height="100%"
          >
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="count"
                nameKey="category"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend verticalAlign="top" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
