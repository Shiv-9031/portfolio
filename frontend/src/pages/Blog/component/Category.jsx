import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

const categories = [
  { id: 1, type: "Music" },
  { id: 2, type: "Sports" },
  { id: 3, type: "Movies" },
  { id: 4, type: "Tech" },
  { id: 5, type: "Fashion" },
];

function Category() {
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  return (
    <>
      <Link to={`/blog/create?category=${category || ""}`}>
        <Button variant="contained">Create Post</Button>
      </Link>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link
                to={"/blog"}
                style={{ textDecoration: "none", color: "#000" }}
              >
                All Categories
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category, index) => (
            <TableRow key={category.id}>
              <TableCell>
                <Link
                  to={`?category=${category.type}`}
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  {category.type}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Category;
