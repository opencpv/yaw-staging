import { Meta, StoryObj } from "@storybook/react";
import Pagination, { usePagination } from ".";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination", // Title for the Storybook sidebar
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    pageCount: {
      control: "number",
      description: "Total number of pages",
    },
    forcePage: {
      control: "text",
      description: "To override selected page with parent prop.",
    },
    className: {
      control: "text",
    },
    onPageChange: {
      type: "function",
      description: "Callback function when a page is clicked",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const items = Array.from({ length: 100 }, (_, i) => i + 1);

    const { currentItems, handlePageChange, pageCount, currentPage } =
      usePagination({
        items: items,
        variable: "",
      });

    return (
      <>
        <Pagination
          pageCount={pageCount}
          forcePage={currentPage}
          onPageChange={handlePageChange}
        />
        <ul className="mt-10 flex items-center gap-2">
          {currentItems?.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </>
    );
  },
};
