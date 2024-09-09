import { cn } from "@/lib/utils";
import React from "react";
import styles from "../my-agent/index.module.css";
import Link from "next/link";

type generalProps = {
  /**
   *  Make sure the gap on the table header row corresponds to the gap on the table body row
   */
  gap?: string;
};

type TableProps = {
  /**
   * The content of the table i.e table header and table body. Must be used with TableHeaderRow, TableHeader, TableBody and TableBodyRow
   *  <Table>
   *                <TableHeaderRow>
   *                    <TableHeader> Property </TableHeader>
   *                    <TableHeader> Status </TableHeader>
   *                </TableHeaderRow>
   *                <TableBodyRow>
   *                    <TableBodyRowGroup>
   *                        <TableBody> ... </TableBody>
   *                        <TableBody> ... </TableBody>
   *                    </TableBodyRowGroup>
   *                </TableBodyRow>
   *           </Table>
   */
  children: React.ReactNode;
  className?: string;
};

/**
 *A table component. Used with the <strong>TableSm</strong> component
 */
export const Table = (props: TableProps) => {
  return (
    <section
      role="table"
      aria-label="table"
      className={cn(
        "hidden cursor-default flex-col gap-2 lg:flex",
        props.className,
      )}
    >
      {props.children}
    </section>
  );
};

export const TableSm = (props: TableProps) => {
  return (
    <section
      role="table"
      aria-label="table"
      className={cn(
        "mx-auto flex w-full max-w-xl flex-col gap-8 lg:hidden",
        props.className,
      )}
    >
      {props.children}
    </section>
  );
};

interface TableHeaderRowProps extends generalProps {
  /**
   * The content of the table header row i.e table header. Make sure table header row columns corresponds to table body row columns
   */
  children: React.ReactNode;
  className?: string;
}

export const TableHeaderRow = (props: TableHeaderRowProps) => {
  return (
    <div
      role="rowgroup"
      aria-label="table header row"
      className={cn(
        "grid items-center bg-primary px-3 py-4 text-center font-semibold text-white",
        props.className,
      )}
      style={{ gap: props.gap ?? "4rem" }}
    >
      {props.children}
    </div>
  );
};

export const TableRowSm = (props: TableHeaderRowProps) => {
  return (
    <div
      role="row"
      aria-label="table row"
      className={cn(
        `fade-in flex cursor-default flex-col gap-4 overflow-hidden rounded-lg px-5 py-5 hover:bg-shade`,
        props.className,
      )}
      style={{ animationDuration: "0.5s" }}
    >
      {props.children}
    </div>
  );
};

type TableHeaderProps = {
  /**
   * The text content of the table header e.g: Property
   */
  children: React.ReactNode;
  className?: string;
};

export const TableHeader = (props: TableHeaderProps) => {
  return (
    <div
      role="columnheader"
      aria-label="table header"
      className={cn(
        "gird mx-auto place-items-center text-center",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};

type TableBodyRowGroupProps = {
  /**
   * The wrapper of all table row
   */
  children: React.ReactNode;
  className?: string;
};

export const TableBodyRowGroup = (props: TableBodyRowGroupProps) => {
  return (
    <div
      role="rowgroup"
      aria-label="table body row group"
      className={cn("divide-y", props.className)}
    >
      {props.children}
    </div>
  );
};

interface TableBodyRowProps extends generalProps {
  /**
   * The content of the table body row i.e table body. Make sure table header row columns corresponds to table body row columns
   */
  children: React.ReactNode;
  className?: string;
}

export const TableBodyRow = (props: TableBodyRowProps) => {
  return (
    <div
      role="row"
      aria-label="table body row"
      className={cn(
        "fade-in grid items-center px-1.5 py-2 text-neutral-700 first:pt-0 hover:bg-shade xl:px-4",
        props.className,
      )}
      style={{ gap: props.gap ?? "4rem", animationDuration: "0.5s" }}
    >
      {props.children}
    </div>
  );
};

type TableBodyProps = {
  /**
   * The content of the table body i.e table body.
   */
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export const TableBody = (props: TableBodyProps) => {
  return (
    <>
      {props.href ? (
        <Link
          href={props.href}
          role="row"
          aria-label="table body"
          className={cn(
            "mx-auto grid min-h-28 place-items-center text-center font-semibold",
            props.className,
          )}
        >
          {props.children}
        </Link>
      ) : (
        <div
          role="row"
          aria-label="table body"
          className={cn(
            "mx-auto grid min-h-28 place-items-center text-center font-semibold",
            props.className,
          )}
        >
          {props.children}
        </div>
      )}
    </>
  );
};

export const TableBodySm = (props: TableBodyProps) => {
  return (
    <>
      {props.href ? (
        <Link
          href={props.href}
          aria-label="table body"
          tabIndex={0}
          className={cn(
            "block pb-2 font-semibold text-neutral-700 first:pb-4",
            props.className,
          )}
        >
          {props.children}
        </Link>
      ) : (
        <div
          aria-label="table body"
          tabIndex={0}
          className={cn(
            "pb-2 font-semibold text-neutral-700 first:pb-4",
            props.className,
          )}
        >
          {props.children}
        </div>
      )}
    </>
  );
};
