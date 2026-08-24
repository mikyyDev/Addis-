import {
  Section,
  Container,
  PreviewWrapper,
  PreviewHeader,
  PreviewTitle,
  DashboardButton,
  PreviewContent,
  TableSection,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableCellTitle,
  TableCellArtist,
  TableCellAlbum,
  TableCellDuration,
  TableCellMenu,
  SideCard,
  SideCardTitle,
  SideCardSubtitle,
  SideCardActions,
  SideCardAction,
  Pagination,
  PaginationText,
} from "./DashboardPreview.styles";

const SONGS = [
  {
    title: "Plotagy",
    artist: "Teddy Afro",
    album: "Ceng Emd",
    duration: "344",
  },
  {
    title: "Aesitacment",
    artist: "Teddy Afro",
    album: "Thes bhea",
    duration: "444",
  },
  {
    title: "Cot tugee nitaber",
    artist: "Teddy Afro",
    album: "Thes bhea",
    duration: "344",
  },
  {
    title: "Netbuag",
    artist: "Aster Aweke",
    album: "Fiarina",
    duration: "344",
  },
  { title: "Fliis", artist: "Foituited", album: "Spod", duration: "432" },
  {
    title: "Spartle Losa",
    artist: "Fnuited",
    album: "Lest Rodyeer",
    duration: "433",
  },
];

const DashboardPreview = () => {
  return (
    <Section>
      <Container>
        <PreviewWrapper>
          <PreviewHeader>
            <PreviewTitle>Your music library</PreviewTitle>
            <DashboardButton>Dashboard</DashboardButton>
          </PreviewHeader>

          <PreviewContent>
            <TableSection>
              <Table>
                <TableHead>
                  <tr>
                    <th>.!</th>
                    <th>🎵 Songs</th>
                    <th>Artists</th>
                    <th>Albums</th>
                    <th>Albums 18</th>
                    <th></th>
                  </tr>
                </TableHead>

                <TableBody>
                  {SONGS.map((song, index) => (
                    <TableRow key={index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCellTitle>
                        <span style={{ marginRight: "8px" }}>🎵</span>
                        {song.title}
                      </TableCellTitle>
                      <TableCellArtist>{song.artist}</TableCellArtist>
                      <TableCellAlbum>{song.album}</TableCellAlbum>
                      <TableCellDuration>{song.duration}</TableCellDuration>
                      <TableCellMenu>•••</TableCellMenu>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Pagination>
                <PaginationText>‹ Previous</PaginationText>
                <PaginationText>Page ▾</PaginationText>
              </Pagination>
            </TableSection>

            <SideCard>
              <SideCardTitle>Personal Playlists</SideCardTitle>
              <SideCardSubtitle>Our Week</SideCardSubtitle>
              <div
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "13px",
                  marginBottom: "16px",
                }}
              >
                ♪ Playlist
              </div>
              <SideCardActions>
                <SideCardAction $primary>Gooyer</SideCardAction>
                <SideCardAction>Lash Spgel</SideCardAction>
              </SideCardActions>
            </SideCard>
          </PreviewContent>
        </PreviewWrapper>
      </Container>
    </Section>
  );
};

export default DashboardPreview;
