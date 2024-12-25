import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Tile from "@/components/ui/tile";
import { ProfileSettings } from "@/components/settings/ProfileSetting";

export function SettingsPage() {
  return (
    <div className="md:pt-6 min-h-screen">
      <Tile className="md:p-[30px] md:pb-[37px]" index={1}>
        <Tabs defaultValue="profile">
          <TabsList className="mb-[40px]">
            <TabsTrigger value="profile">Edit Profile</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            {/* Pass the user data to ProfileSettings component or handle it within */}
            <ProfileSettings />
          </TabsContent>

          <TabsContent value="preferences">Coming Soon</TabsContent>

          <TabsContent value="security">Coming Soon</TabsContent>
        </Tabs>
      </Tile>
    </div>
  );
}
