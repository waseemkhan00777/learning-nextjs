import Card from "@/components/card";
import Link from "next/link";
import React from "react";

const ArchivedNotification = () => {
  return (
    <Card>
      <div>ArchivedNotification</div>
      <Link href="/complex-dashboard" className="ml-4">
        Default
      </Link>
    </Card>
  );
};

export default ArchivedNotification;
