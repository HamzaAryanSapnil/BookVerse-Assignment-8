import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadingList } from "../../Utils/localStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const PagesToRead = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    const readBooks = getStoredReadingList();
    console.log(readBooks);
    if (books.length > 0) {
      const readBooksExists = books.filter((book) =>
        readBooks.includes(parseInt(book.bookId))
      );
      setReadBooks(readBooksExists);
    }
  }, [books]);
  console.log(readBooks);

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

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div className="mx-auto" >
      <BarChart
        width={800}
        height={600}
        data={readBooks}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Cell></Cell>
        <XAxis dataKey="bookName"></XAxis>
        <YAxis dataKey="totalPages"></YAxis>
        <CartesianGrid></CartesianGrid>
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
            {readBooks.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PagesToRead;
