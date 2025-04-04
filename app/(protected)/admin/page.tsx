"use client";

import { admin } from "@/actions/admin.action";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/notifications/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";

const AdminPage = () => {
  const onServerActionClick = async () => {
    try {
      const data = await admin();
      if (data.error) {
        toast.error(data.error);
      } else if (data.success) {
        toast.success(data.success);
      }
    } catch {
      toast.error("An unexpected error occurred");
    }
  };

  const role = useCurrentRole();
  return (
    <Card className="w-[475px] shadow-md">
      <CardHeader>
        <p className="text-center text-2xl font-semibold">{role}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are allowed to see this content !" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-semibold">Admin-only</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
