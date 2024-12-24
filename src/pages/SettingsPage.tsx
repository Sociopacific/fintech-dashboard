import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Tile from "@/components/ui/tile";
import { ProfileSettings } from "@/components/settings/ProfileSetting";

export function SettingsPage() {
  return (
    <div className="p-6 min-h-screen">
      <Tile className="p-6" index={1}>
        <Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Edit Profile</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <ProfileSettings />
          </TabsContent>

          <TabsContent value="preferences">
            Access and update your documents.
          </TabsContent>

          <TabsContent value="security">
            Edit your profile or update contact information.
          </TabsContent>
        </Tabs>
      </Tile>
    </div>
  );
}
